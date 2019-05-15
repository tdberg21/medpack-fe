import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import { compose } from 'recompose';
import ArrowIcon from '@material-ui/icons/ChevronRight';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    width: 400,
    margin: '100px auto',
    padding: theme.spacing.unit * 3,
  },
  button: {
    margin: `${theme.spacing.unit * 2}px 0`,
    display: 'flex',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.palette.primary.contrastText,
    letterSpacing: 0.5,
    fontWeight: 700,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    margin: `${theme.spacing.unit * 4}px 0`,
  },
  navLink: {
    margin: `${theme.spacing.unit}px 0`,
  },
  textField: {},
  title: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

const Login = ({ classes }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitForm = event => {
    event.preventDefault();
    // Send to back end for authentication...
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Typography variant="h2" className={classes.header}>
        Welcome to UAB-SM
      </Typography>
      <Paper className={classes.root}>
        <Typography variant="h5" className={classes.title}>
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmitForm}>
          <TextField
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            variant="outlined"
            label="Email"
            className={classes.textField}
            margin="normal"
            color="secondary"
          />
          <TextField
            type="password"
            name="password"
            variant="outlined"
            label="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            margin="normal"
            color="secondary"
          />
          <Button
            type="submit"
            variant="contained"
            className={classes.button}
            color="primary"
          >
            <Typography className={classes.buttonText} variant="subtitle1">
              Login
            </Typography>
            <ArrowIcon />
          </Button>
        </form>
        <Divider />
        <NavLink to="/SignUp">
          <Button className={classes.navLink}>or Sign Up</Button>
        </NavLink>
      </Paper>
    </>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
  withStyles(styles)
)(Login);
