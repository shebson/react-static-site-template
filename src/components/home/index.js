import React from 'react';
import { Helmet } from 'react-helmet';

export default () => (
  <div className="App-intro">
    <Helmet>
      <title>React Static Site Template</title>
    </Helmet>
    <p>
      This is a simple template static sites / single page apps based on create-react-app. The
      site is written as a standard react app which is snapshotted to static html and uploaded to
      S3, with some niceties like stripping <code>.html</code> extensions. The project
      uses react-router and uses helmet to set title and other head tags.
    </p>
    <p>
      This project comes with a highly oppinionated linter, and makes a number of decisions that
      have been helpful in my personal projects, but may not be right for every project.
    </p>
    <p>
      To get started, just do <code>yarn start</code>.
    </p>
  </div>
);
