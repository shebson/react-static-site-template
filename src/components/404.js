import React from 'react';
import { Helmet } from 'react-helmet';

export default () => (
  <div>
    <Helmet>
      <title>404 Not found</title>
    </Helmet>
    <p>
      The content that was here has moved or never existed.
    </p>
    <p>
      Client-side, this will be rendered if a route doesn‘t resolve. For first-load, this will also
      be snapshotted to <code>/404.html</code> and uploaded to S3 as <code>/404</code>. If you use
      cloudfront, you can set set this as a custom error response for 403s returned by S3.
    </p>
  </div>
);
