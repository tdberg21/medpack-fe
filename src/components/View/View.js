import React from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import {
  Appointment,
  Appointments,
  Patients,
  UserInterface,
  Calendar
} from "..";
import { CreateAppointment, CreatePatient } from "../../Containers";

const styles = theme => ({
  root: {
    display: "flex"
  },
  content: {
    boxSizing: "border-box",
    padding: theme.spacing.unit * 6,
    width: "100%",
    height: "100%"
  }
});

const View = ({ classes, events }) => {
  return (
    <UserInterface>
      <Switch>
        <Route exact path="/app" component={Calendar} />
        <Route path="/app/patients" component={Patients} />
        <Route path="/app/addAppointment" component={CreateAppointment} />
        <Route path="/app/appointments" component={Appointments} />
        <Route path="/app/addPatient" component={CreatePatient} />
        <Route
          path="/app/appointment/:id"
          render={({ match }) => {
            const { id } = match.params;
            const matchingEvent = events.find(event => {
              return event.id === id;
            });
            console.log(matchingEvent);
            return <Appointment event={matchingEvent} />;
          }}
        />
        <Redirect to="/" />
      </Switch>
    </UserInterface>
  );
};

const mapStateToProps = state => ({
  patients: state.patients,
  events: state.events
});

export default compose(
  connect(mapStateToProps),
  withRouter,
  withStyles(styles)
)(View);

// <Route
// path="/app/appointment/:id"
// render={({ match }) => {
//   const { id } = match.params;
//   const match = events.find(
//     event => event.start === parseInt(id)
//   );
//   return <Appointment{...jack} />;
// }}
// />
