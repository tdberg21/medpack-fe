import React, { Component } from 'react';
import { Redirect, NavLink, withRouter } from 'react-router-dom';
import {
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
  withStyles,
  Dialog,
  DialogTitle,
  DialogActions,
} from '@material-ui/core';
import { userLogin } from '../../util/Actions';
import { createUser } from '../../util/ApiCalls';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import ArrowIcon from '@material-ui/icons/ChevronRight';
import PropTypes from 'prop-types';
import backImage from '../../Assets/photo-1507925921958-8a62f3d1a50d.jpg';
import { resolve } from 'path';

const styles = theme => ({
  root: {
    width: 700,
    margin: 'auto',
    padding: theme.spacing.unit * 3,
    backgroundColor: '#fffffff0',
    zIndex: 2,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
  container: {
    boxSizing: 'border-box',
    minHeight: '100vh',
    backgroundImage: `url('${backImage}')`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    filter: 'blur(4px)',
    opacity: 0.75,
  },
  dialog: {},
  dialogButton: {
    width: '80%',
    margin: '0 auto 16px auto',
  },
  dialogTitle: {
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    paddingTop: 64,
    zIndex: 2,
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontWeight: 400,
    fontFamily: `'Montserrat', sans-serif`,
  },
  navLink: {
    margin: `${theme.spacing.unit}px 0`,
  },
  title: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class SignUp extends Component {
  constructor(props) {
    super();

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      phone_number: '',
      office_id: 1,
      role: 'default',
      status: 'active',
      open: false,
      dialogConfirmation: false,
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitForm = async event => {
    event.preventDefault();
    // this.setState({ open: true });
    const newUser = await this.returnUserInfo();
    const response = await createUser(newUser);
    if (response.message) {
      this.setState({ open: true });
    }
  };

  handleDialog = () => {
    this.setState({ dialogConfirmation: true });
  };

  returnUserInfo = () => {
    const {
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
      phone_number,
      office_id,
      role,
      status,
    } = this.state;

    const newUser = {
      user: {
        first_name,
        last_name,
        email,
        password,
        password_confirmation,
        phone_number,
        office_id,
        role,
        status,
      },
    };
    return newUser;
  };

  render() {
    const { classes } = this.props;
    const {
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
      phone_number,
      open,
    } = this.state;

    if (this.state.dialogConfirmation === true) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <div className={classes.container} />
        <Paper className={classes.root}>
          {/* <div className={classes.back}> */}
          <Typography variant="h5" className={classes.title}>
            Sign Up
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmitForm}>
            <TextField
              type="text"
              name="first_name"
              value={first_name}
              onChange={this.handleChange}
              variant="outlined"
              label="First Name"
              className={classes.textField}
              margin="normal"
              color="secondary"
            />
            <TextField
              type="text"
              name="last_name"
              value={last_name}
              onChange={this.handleChange}
              variant="outlined"
              label="Last Name"
              className={classes.textField}
              margin="normal"
              color="secondary"
            />
            <TextField
              type="text"
              name="phone_number"
              value={phone_number}
              onChange={this.handleChange}
              variant="outlined"
              label="Phone Number"
              className={classes.textField}
              margin="normal"
              color="secondary"
            />
            <TextField
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
              margin="normal"
              color="secondary"
            />
            <TextField
              type="password"
              name="password_confirmation"
              variant="outlined"
              label="Confirm password"
              value={password_confirmation}
              onChange={this.handleChange}
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
                Sign Up
              </Typography>
              <ArrowIcon />
            </Button>
          </form>
          <Divider />
          <NavLink to="/">
            <Button className={classes.navLink}>or Log In</Button>
          </NavLink>
        </Paper>
        <Dialog open={open} className={classes.dialog}>
          <DialogTitle className={classes.dialogTitle}>
            <Typography variant="h6">
              Thanks for signing up, check your email for your confirmation code
              and one time password QR code to use with the Google Authenticator
              app
            </Typography>
          </DialogTitle>
          <DialogActions className={classes.dialogContent}>
            <Button
              variant="contained"
              color="primary"
              className={classes.dialogButton}
              onClick={this.handleDialog}
            >
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleLogin: user => dispatch(userLogin(user)),
});

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withRouter,
  withStyles(styles)
)(SignUp);
