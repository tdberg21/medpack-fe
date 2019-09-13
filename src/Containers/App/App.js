import React, { Component } from 'react';
import './App.css';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
//Components
import { View, Success } from '../../Components';
import { Login, SignUp } from '..';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/app" component={View} />
          <Route path="/success" component={Success} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
