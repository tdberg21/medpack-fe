import React, { Component } from 'react';
import './App.css';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
//Components
import { View, Success } from '../../Components';
import { Login, SignUp, UserConfirmation} from '..';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/app" component={View} />
          <Route exact path="/success" component={Success} />
          <Route path="/user_confirmations" component={UserConfirmation} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
