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
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  active: {
    color: theme.palette.secondary.main,
    backgroundColor: '#fdfdfd',
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
  link: {
    textDecoration: 'none',
    color: 'initial',
  },
  listItem: {
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
});

const LeftDrawer = ({ classes }) => {
  const createNavOptions = () => {
    const navOptions = [
      { text: 'Home', route: '', icon: <HomeIcon key="icon" /> },
      {
        text: 'Office',
        route: '/Office',
        icon: <CalendarIcon key="icon" />,
      },
      {
        text: 'Appointments',
        route: '/appointments',
        icon: <AppointmentIcon key="icon" />,
      },
      {
        text: 'Patients',
        route: '/patients',
        icon: <PatientsIcon key="icon" />,
      },
      {
        text: 'Screening Results',
        route: '/screeningResults',
        icon: <ScreeningIcon key="icon" />,
      },
      {
        text: 'Add Appointment',
        route: '/addAppointment',
        icon: <MakeAppointmentIcon key="icon" />,
      },
      {
        text: 'Add Patient',
        route: '/addPatient',
        icon: <MakePatientIcon key="icon" />,
      },
    ];

    return navOptions.map((option, index) => {
      return (
        <>
          <NavLink
            className={classes.link}
            to={`/app${option.route}`}
            key={option.text}
            activeClassName={classes.active}
          >
            <ListItem button className={classes.listItem}>
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText
                primary={option.text}
                className={classes.listItemText}
              />
            </ListItem>
          </NavLink>
          {index === 4 && <Divider />}
        </>
      );
    });
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.appBar} />
      <List>{createNavOptions()}</List>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftDrawer);
