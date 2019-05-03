import React, { Component } from 'react';
import './App.css';
import Login from '../Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          UAB-SM
        </header>
        <Login />
      </div>
    );
  }
}

export default App;
