import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './components/home';
import FourOhFour from './components/404';
import './scss/App.scss';

export default () => (
  <div className="App">
    <header className="container text-center">
      <h1 className="nav-item">React Static Site</h1>
      <nav className="nav justify-content-center border-bottom mb-3">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="https://github.com/shebson/react-static-site-template">Git Repo</Link>
      </nav>
    </header>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/" component={FourOhFour} />
      </Switch>
    </div>
  </div>
);
