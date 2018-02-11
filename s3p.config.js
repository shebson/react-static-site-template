const config = require('./package.json').deployment;

if (!config.bucket || !config.region || !config.profile) {
  throw new Error('Bucket, region, and AWS profile must be set in package.json to enable uploads');
}

function setContentType(type) {
  return (file, params, callback) => {
    const newParams = Object.assign({}, params, {
      ContentType: type
    });
    callback(null, newParams);
  };
}

function stripSuffix(suffix) {
  return (file, keyname, callback) => {
    let newKeyName = keyname;
    if (keyname.slice(0 - suffix.length, keyname.length) === suffix) {
      newKeyName = keyname.slice(0, keyname.length - suffix.length);
    }
    callback(null, newKeyName);
  };
}

module.exports = {
  profile: config.profile,
  region: config.region,
  origin: './build',
  concurrency: 1,
  destination: `s3://${config.bucketName}`,
  delete: true,
  rules: [
    {
      pattern: /\.html$/i,
      alternateKey: stripSuffix('.html'),
      putParams: setContentType('text/html')
    }
  ],
  schemaVersion: 1
};
