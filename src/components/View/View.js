import React from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { Patients, PatientDetails, UserInterface, Calendar } from '..';
import { CreateAppointment, CreatePatient } from '../../Containers';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    boxSizing: 'border-box',
    padding: theme.spacing.unit * 6,
    width: '100%',
    height: '100%',
  },
});

const View = ({ classes, patients }) => {
  return (
    <UserInterface>
      <Switch>
        <Route exact path="/app/patients" component={Patients} />
        <Route path="/app/addAppointment" component={CreateAppointment} />
        <Route path="/app/addPatient" component={CreatePatient} />
        <Route path="/app/Calendar" component={Calendar} />
        <Route
          path="/app/patients/:id"
          render={({ match }) => {
            const { id } = match.params;
            const selectedPatient = patients.find(
              patient => patient.id === parseInt(id)
            );
            return <PatientDetails patientInfo={selectedPatient} />;
          }}
        />
        <Redirect to="/app" />
      </Switch>
    </UserInterface>
  );
};

const mapStateToProps = state => ({
  patients: state.patients,
});

export default compose(
  connect(mapStateToProps),
  withRouter,
  withStyles(styles)
)(View);
