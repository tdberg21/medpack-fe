import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { 
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
  withStyles
} from '@material-ui/core';
import { compose } from 'recompose';
import ArrowIcon from '@material-ui/icons/ChevronRight';

const styles = (theme) => ({
  root: {
    width: 400,
    margin: '100px auto',
    padding: theme.spacing.unit * 3
  },
  button: {
    margin: `${theme.spacing.unit * 2}px 0`,
    display: 'flex',
    alignItems: 'center'
  },
  buttonText: {
    color: theme.palette.primary.contrastText,
    letterSpacing: 0.5,
    fontWeight: 700
  },
  form: {
    display: "flex",
    flexDirection: 'column'
  },
  navLink: {
    margin: `${theme.spacing.unit}px 0`
  },
  title: {
    margin: '5px 0'
  }
})

class SignUp extends Component {
  state = {
    email: '',
    password: ''
  };

  saveToState = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    // Send to back end for authentication...
    this.setState({
      email: '',
      password: ''
    }); 
  }

  render() {
    const { classes } = this.props;
    return (
    <Paper className={classes.root}>
      <Typography variant="h5" className={classes.title}>Sign Up</Typography>
      <form className={classes.form} onSubmit={this.handleSubmitForm}>
          <TextField
            type="email"
            name="email"  
            value={this.state.email}
            onChange={this.saveToState}
            variant='outlined'
            label='Email'
            className={classes.textField}
            margin='normal'
          />
          <TextField
            type="password"
            name="password"
            variant='outlined'
            label='Password'
            value={this.state.password}
            onChange={this.saveToState}
            margin='normal'
          />
          <Button 
            type="submit" 
            variant='contained' 
            className={classes.button}
            color='primary'
          >
            <Typography className={classes.buttonText} variant="subtitle1">Sign Up</Typography>
            <ArrowIcon />
          </Button>
      </form>
      <Divider/>
      <NavLink to='/'>
        <Button className={classes.navLink}>
          or Login
        </Button>
      </NavLink>
    </Paper>
    );
  }
}

export default compose(
  withRouter,
  withStyles(styles)
)(SignUp)