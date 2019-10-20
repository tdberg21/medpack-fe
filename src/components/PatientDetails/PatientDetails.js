import React, { Component } from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Typography,
  withStyles
} from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ViewIcon from "@material-ui/icons/ChevronRight";
import { getPatientsAppointments } from "../../util/ApiCalls";
import { Link } from "react-router-dom";
import { compose } from "recompose";
import { connect } from "react-redux";

const styles = theme => ({
  root: {},
  expansionActions: {
    display: "flex",
    alignItems: "center"
  },
  summary: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing.unit * 2
  }
});

class PatientDetails extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
      appointments: []
    };
  }

  componentDidMount() {
    this.addAppointmentsToState();
  }

  toggleExpansion = () => {
    this.setState(({ expanded }) => ({ expanded: !expanded }));
  };

  addAppointmentsToState = () => {
    const { events, patient } = this.props;
    const appointments = events.filter(event => event.patient_id == patient.id);
    console.log(patient.id, appointments);
    this.setState({ appointments });
  };

  renderAppointments = () => {
    return this.state.appointments.map(event => {
      const { id, start_date, start_time, end_time } = event;
      return (
        <TableRow>
          <TableCell>{id}</TableCell>
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

  render() {
    const { classes, patient } = this.props;
    const { expanded } = this.state;
    return (
      <ExpansionPanel
        className={classes.root}
        expanded={expanded}
        onClick={this.toggleExpansion}
      >
        <ExpansionPanelSummary>
          <div className={classes.summary}>
            <div>
              <Typography>Id: {patient.id}</Typography>
            </div>
            <div className={classes.expansionActions}>
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Appointment Id</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Start Time</TableCell>
                <TableCell>End Time</TableCell>
                <TableCell>View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.appointments.length && this.renderAppointments()}
            </TableBody>
          </Table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(PatientDetails);
