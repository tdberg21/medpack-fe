import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
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

export default withRouter(App);
