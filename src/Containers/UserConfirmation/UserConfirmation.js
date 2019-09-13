import React, { Component } from 'react';
import { confirmUser } from '../../util/ApiCalls';
import { AppHeader } from '..';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';


class UserConfirmation extends Component {
  render() {

    const splitUrl = this.props.history.location.pathname.split('/user_confirmations/')[1];
    if (splitUrl) {
      console.log(splitUrl);
      const token = splitUrl.split('/confirm_email')[0];
      confirmUser(token);
      // history.push('/success');
      console.log('success')
    }

    return (
      <div>
        <AppHeader />
        <p>Thank you for confirming your account. Please contact an administrator to activate your account.</p>
        <NavLink to="/">
          <Button>Click Here to Log In</Button>
        </NavLink>
      </div>
    );
  }
}

export default UserConfirmation;