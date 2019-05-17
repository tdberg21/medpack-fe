import React from 'react';
import { withStyles, Card, Fab, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { NavLink } from 'react-router-dom';

const styles = theme => ({
  root: {
    // padding: theme.spacing.unit * 9,
  },
  card: {
    minWidth: 275,
    margin: theme.spacing.unit * 3,
  },
});

const Patients = ({ classes }) => {
  const mockPatients = [
    {
      name: 'Jack',
      nextAppointment: '05/13/20',
    },
    {
      name: 'Chris',
      nextAppointment: '05/14/20',
    },
    {
      name: 'Tory',
      nextAppointment: '05/22/22',
    },
  ];

  const patientCards = () => {
    return mockPatients.map(patient => {
      return (
        <Card className={classes.card}>
          <Typography>Name: {patient.name}</Typography>
          <Typography>Next Appointment: {patient.nextAppointment}</Typography>
        </Card>
      );
    });
  };

  return (
    <div className={classes.root}>
      {patientCards()}
      <NavLink to="/app/addPatient">
        <Fab color="secondary" aria-label="Add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </NavLink>
    </div>
  );
};

export default withStyles(styles)(Patients);
