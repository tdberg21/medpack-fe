import React from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import AppHeader from '../AppHeader/AppHeader';
import LeftDrawer from '../LeftDrawer/LeftDrawer';
import Patients from '../Patients/Patients';
import CreateAppointment from '../../Containers/CreateAppointment/CreateAppointment';
import CreatePatient from '../../Containers/CreatePatient/CreatePatient';

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
    <>
      <AppHeader />
      <div className={classes.root}>
        <LeftDrawer />
        <div className={classes.content}>
          <Switch>
            <Route path="/app/patients" component={Patients} />
            <Route path="/app/addAppointment" component={CreateAppointment} />
            <Route path="/app/addPatient" component={CreatePatient} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default compose(
  withRouter,
  withStyles(styles)
)(View);
