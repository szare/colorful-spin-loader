import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorFulSpinLoader from './node_modules/components/ColorFulSpinLoader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ColorFulSpinLoader topColor={'green'}
                           rightColor={'red'}
                           bottomColor={'blue'}
                           leftColor={'#ccddee'}
                           size={10}
                           duration={1.4}
        />
      </div>
    );
  }
}

export default App;
