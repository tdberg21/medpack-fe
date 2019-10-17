import React, { Component } from "react";
import { confirmUser } from "../../util/ApiCalls";
import { NavLink } from "react-router-dom";
import LogoImg from "./../../Assets/logo.png";
import { Button, Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: 800,
    height: 600,
    margin: "200px auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    margin: `${theme.spacing.unit * 3}px 0`
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 4
  },
  button: {
    width: 225
  },
  buttonText: {
    color: "#fff"
  }
});

class UserConfirmation extends Component {
  render() {
    const splitUrl = this.props.history.location.pathname.split(
      "/user_confirmations/"
    )[1];
    if (splitUrl) {
      console.log(splitUrl);
      const token = splitUrl.split("/confirm_email")[0];
      confirmUser(token);
      // history.push('/success');
      console.log("success");
    }

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <img src={LogoImg} alt="logo" height="50" className={classes.img} />
        <Typography variant="h5" className={classes.text}>
          Thank you for confirming your account. <br /> Please contact an
          administrator to activate your account.
        </Typography>
        <NavLink to="/">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            <Typography variant="subtitle1" className={classes.buttonText}>
              Click Here to Log In
            </Typography>
          </Button>
        </NavLink>
      </div>
    );
  }
}

export default withStyles(styles)(UserConfirmation);
