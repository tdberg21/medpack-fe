import React from 'react';
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
import PropTypes from 'prop-types';

const Success = ({ classes }) => {
  return (
    <div>
      <AppHeader />
      <p>Thank you for confirming your account. Please contact an administrator to activate your account.</p>
      <NavLink to="/">
        <Button>Click Here to Log In</Button>
      </NavLink>
    </div>
  );
};

Success.propTypes = {
  
};

export default Success;