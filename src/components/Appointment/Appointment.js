import React, { Component } from "react";
import { Button, Paper, Typography, withStyles } from "@material-ui/core";
import EditAppointment from "../EditAppointment/EditAppointment";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3
  },
  content: {
    margin: `${theme.spacing.unit * 2}px 0`
  }
});

class Appointment extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleDialog = open => {
    this.setState({ open });
  };

  render() {
    console.log(this.props);
    const { id, patient_id, office_id, start, classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Typography className={classes.content}>
          Patient ID: {patient_id}
        </Typography>
        <Typography className={classes.content}>
          Office ID: {office_id}
        </Typography>
        <Typography className={classes.content}>Start Time: {start}</Typography>
        <Button variant="contained" color="primary" className={classes.content}>
          Add Scan Results
        </Button>
        <EditAppointment
          patient_id={patient_id}
          start={start}
          office_id={office_id}
          id={id}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(Appointment);
