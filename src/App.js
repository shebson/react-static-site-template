import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/home';
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
      <Route exact path="/" component={Home} />
    </div>
  </div>
);
