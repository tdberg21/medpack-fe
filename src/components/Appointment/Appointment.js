import React, { Component } from "react";
import {
  Button,
  Paper,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Typography,
  withStyles
} from "@material-ui/core";
import EditAppointment from "../EditAppointment/EditAppointment";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3
  },
  button: {
    width: 200,
    marginRight: theme.spacing.unit * 2
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: theme.spacing.unit * 2
  },
  content: {
    margin: `${theme.spacing.unit * 2}px 0`
  },
  title: {
    marginBottom: theme.spacing.unit * 2,
    textAlign: "left"
  },
  topContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
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

  renderDateTime = () => {
    const { classes, event } = this.props;
    const { start, end } = event;
    const dateTime = {
      date: start.split("T")[0],
      start: start.split("T")[1],
      end: end.split("T")[1]
    };
    return (
      <>
        <TableCell className={classes.content}>{dateTime.date}</TableCell>
        <TableCell className={classes.content}>{dateTime.start}</TableCell>
        <TableCell className={classes.content}>{dateTime.end}</TableCell>
      </>
    );
  };

  render() {
    console.log(this.props.event);
    const {
      patient_id,
      office_id,
      id,
      start,
      end,
      appointment_result
    } = this.props.event;
    const { classes } = this.props;
    return (
      <>
        <Typography variant="h4" className={classes.title}>
          {" "}
          Appointment Details{" "}
        </Typography>
        <Paper className={classes.root}>
          <div className={classes.topContainer}>
            <Typography variant="h6"> Appointment Id: {id} </Typography>
            <div className={classes.buttonContainer}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Add Scan Results
              </Button>
              <EditAppointment event={this.props.event} />
            </div>
          </div>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Start Time</TableCell>
                <TableCell>End Time</TableCell>
                {/* <TableCell>Office Id</TableCell> */}
                <TableCell>Patient Id</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {this.renderDateTime()}
                {/* <TableCell>{office_id}</TableCell> */}
                <TableCell>{patient_id}</TableCell>
                <TableCell>{appointment_result}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </>
    );
  }
}

export default withStyles(styles)(Appointment);
