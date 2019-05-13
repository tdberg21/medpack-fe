import React, { Component } from 'react';
import './App.css';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
//Components
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import View from '../../Components/View/View';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/app" component={View} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
