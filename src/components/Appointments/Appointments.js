import React, { Component } from "react";
import {
  AppBar,
  Paper,
  Tabs,
  Tab,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Typography,
  withStyles
} from "@material-ui/core";
import ViewIcon from "@material-ui/icons/ChevronRight";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {},
  tabContainer: {
    width: "100%",
    // height: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  }
});

class Appointments extends Component {
  constructor() {
    super();
    this.state = {
      value: "scheduled",
      sortedEvents: {}
    };
  }

  componentDidMount() {
    this.sortAppointments();
  }

  sortAppointments = () => {
    const sortedEvents = this.props.appointments.reduce((acc, curr) => {
      if (!acc[curr.appointment_result]) {
        Object.assign(acc, { [curr.appointment_result]: [curr] });
      } else {
        acc[curr.appointment_result].push(curr);
      }
      return acc;
    }, {});
    this.setState({ sortedEvents });
  };

  renderAppointments = () => {
    return this.state.sortedEvents[this.state.value].map(event => {
      const { id, patient_id, start_date, start_time, end_time } = event;
      return (
        <TableRow>
          <TableCell>{id}</TableCell>
          <TableCell>{patient_id}</TableCell>
          <TableCell>{start_date}</TableCell>
          <TableCell>{start_time}</TableCell>
          <TableCell>{end_time}</TableCell>
          <TableCell>
            <Link to={`/app/appointment/${id}`}>
              <ViewIcon />
            </Link>
          </TableCell>
        </TableRow>
      );
    });
  };

  renderMessage = () => {
    return (
      <Typography>
        There are currently no {this.state.value} appointments
      </Typography>
    );
  };

  handleChange = (e, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value, sortedEvents } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={this.handleChange}
            className={classes.tabContainer}
          >
            <Tab label="sheduled" value="scheduled" />
            <Tab label="pending" value="pending" />
            <Tab label="missed" value="missed" />
            <Tab label="resheduled" value="rescheduled" />
            <Tab label="canceled" value="canceled" />
            <Tab label="attended" value="attended" />
          </Tabs>
        </AppBar>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Patient Id</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Start Time</TableCell>
                <TableCell>End Time</TableCell>
                <TableCell>View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedEvents[value]
                ? this.renderAppointments()
                : this.renderMessage()}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appointments: state.events
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(Appointments);
