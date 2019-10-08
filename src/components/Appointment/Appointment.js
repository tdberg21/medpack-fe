import React, { Component } from "react";
import { Button, Paper, Typography, withStyles } from "@material-ui/core";

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
  }

  render() {
    console.log(this.props.patient_id);
    const { patient_id, office_id, start, classes } = this.props;
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
      </Paper>
    );
  }
}

export default withStyles(styles)(Appointment);
