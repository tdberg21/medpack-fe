import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
//Components
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          UAB-SM
        </header>
        <Route exact path='/' component={Login}/>
        <Route path='/signup' component={SignUp}/>
      </div>
    );
  }
}

export default App;
