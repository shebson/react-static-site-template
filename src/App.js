import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/home';
import './App.css';

class App extends Component {
  render() {
    return (
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
  }
}

export default App;
