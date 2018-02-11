import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/home';
import './App.css';

export default () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">React Static Site</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
    </header>
    <Route exact path="/" component={Home} />
  </div>
);
