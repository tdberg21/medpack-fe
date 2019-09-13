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
import { userLogin } from '../../util/Actions';
import { userLoginPost, confirmUser } from '../../util/ApiCalls';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import ArrowIcon from '@material-ui/icons/ChevronRight';
import PropTypes from 'prop-types';
import backImage from '../../Assets/photo-1507925921958-8a62f3d1a50d.jpg';

const styles = theme => ({
  root: {
    width: 400,
    margin: '100px auto',
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

const Login = ({ classes, handleLogin, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp_code, setOtp_code] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const splitUrl = history.location.pathname.split('/user_confirmations/')[1];
  if (splitUrl) {
    console.log(splitUrl);
    confirmUser(history.location.pathname);
    // history.push('/success');
    console.log('success')
  }
  

  const handleSubmitForm = async event => {
    event.preventDefault();
    setErrorMessage('');
    const newUser = { email, password, otp_code };
    const response = await userLoginPost(newUser);
    if (response.error) {
      setErrorMessage('Invalid Credentials.');
    } else {
      handleLogin(newUser);
      history.push('/app/patients');
    }
    setEmail('');
    setPassword('');
  };

  

  return (
    <>
      <div className={classes.container} />
      <Typography variant="h2" className={classes.header}>
        Welcome to Provider Minder
      </Typography>
      <Paper className={classes.root}>
        {/* <div className={classes.back}> */}
        <Typography variant="h5" className={classes.title}>
          Login
        </Typography>
        {errorMessage}
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
          <TextField
            type="text"
            name="otp"
            variant="outlined"
            label="OTP Code"
            value={otp_code}
            onChange={e => setOtp_code(e.target.value)}
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

const mapDispatchToProps = dispatch => ({
  handleLogin: user => dispatch(userLogin(user)),
});

Login.propTypes = {
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
)(Login);
