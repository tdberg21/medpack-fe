import React from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { Patients, UserInterface } from '..';
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

const View = ({ classes }) => {
  return (
    <UserInterface>
      <Switch>
        <Route path="/app/patients" component={Patients} />
        <Route path="/app/addAppointment" component={CreateAppointment} />
        <Route path="/app/addPatient" component={CreatePatient} />
        <Redirect to="/" />
      </Switch>
    </UserInterface>
  );
};

export default compose(
  withRouter,
  withStyles(styles)
)(View);
