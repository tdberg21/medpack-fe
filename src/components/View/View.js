import React from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { Home, Patients, PatientDetails, UserInterface, Calendar } from "..";
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

const View = ({ classes, patients }) => {
  return (
    <UserInterface>
      <Switch>
        <Route exact path="/app" component={Home} />
        <Route path="/app/patients" component={Patients} />
        <Route path="/app/addAppointment" component={CreateAppointment} />
        <Route path="/app/addPatient" component={CreatePatient} />
        <Redirect to="/" />
      </Switch>
    </UserInterface>
  );
};

const mapStateToProps = state => ({
  patients: state.patients
});

export default compose(
  connect(mapStateToProps),
  withRouter,
  withStyles(styles)
)(View);
