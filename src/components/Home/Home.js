import React, { Component } from 'react';
import { Button, withStyles, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {},
  buttonText: {
    color: '#fff',
    textDecoration: 'none',
  },
});

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div id="signin-prompt" className="jumbotron page">
          <h1>Login to Outlook to access your calendar</h1>
          <Button variant="contained" color="primary">
            <a
              className="btn btn-lg btn-primary"
              href="#"
              role="button"
              id="connect-button"
            >
              <Typography variant="subtitle1" className={classes.buttonText}>
                Connect to Outlook
              </Typography>
            </a>
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
