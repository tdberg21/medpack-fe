import React, { Component } from 'react';
import './App.css';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
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
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/signup' component={SignUp}/>
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
