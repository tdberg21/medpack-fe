import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import CalendarIcon from '@material-ui/icons/Event';
import AppointmentIcon from '@material-ui/icons/Assignment';
import PatientsIcon from '@material-ui/icons/AssignmentInd';
import ScreeningIcon from '@material-ui/icons/Assessment';
import MakeAppointmentIcon from '@material-ui/icons/SupervisedUserCircle';
import MakePatientIcon from '@material-ui/icons/AccountCircle';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: theme.overrides.MuiAppBar.root,
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  listItem: {
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
});

const LeftDrawer = ({ classes }) => {
  const navigationIcons = [
    <HomeIcon key="icon" />,
    <CalendarIcon key="icon" />,
    <AppointmentIcon key="icon" />,
    <PatientsIcon key="icon" />,
    <ScreeningIcon key="icon" />,
  ];

  const navigationAppointments = [
    <MakeAppointmentIcon key="icon" />,
    <MakePatientIcon key="icon" />,
  ];

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.appBar} />
        <List>
          {[
            'Home',
            'Calendar',
            'Appointments',
            'Patients',
            'Screening Results',
          ].map((text, index) => (
            <ListItem button key={text} className={classes.listItem}>
              <ListItemIcon>{navigationIcons[index]}</ListItemIcon>
              <ListItemText primary={text} className={classes.listItemText} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Add Appointment', 'Add Patient'].map((text, index) => (
            <ListItem button key={text} className={classes.listItem}>
              <ListItemIcon>{navigationAppointments[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

LeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftDrawer);
