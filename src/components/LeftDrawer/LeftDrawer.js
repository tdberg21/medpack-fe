import React from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CalendarIcon from "@material-ui/icons/Event";
import AppointmentIcon from "@material-ui/icons/Assignment";
import PatientsIcon from "@material-ui/icons/AssignmentInd";
import MakeAppointmentIcon from "@material-ui/icons/SupervisedUserCircle";
import MakePatientIcon from "@material-ui/icons/AccountCircle";
import AdminIcon from "@material-ui/icons/VerifiedUser";
import { connect } from "react-redux";
import { compose } from "recompose";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  active: {
    color: theme.palette.secondary.main,
    backgroundColor: "#fdfdfd"
  },
  appBar: theme.overrides.MuiAppBar.root,
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  link: {
    textDecoration: "none",
    color: "initial"
  },
  listItem: {
    "&:hover": {
      color: theme.palette.secondary.main
    }
  }
});

const LeftDrawer = ({ classes, user }) => {
  const createNavOptions = () => {
    const navOptions = [
      { text: "Home", route: "", icon: <HomeIcon key="icon" /> },
      {
        text: "Office",
        route: "/Office",
        icon: <CalendarIcon key="icon" />
      },
      {
        text: "Appointments",
        route: "/appointments",
        icon: <AppointmentIcon key="icon" />
      },
      {
        text: "Patients",
        route: "/patients",
        icon: <PatientsIcon key="icon" />
      },
      {
        text: "Add Appointment",
        route: "/addAppointment",
        icon: <MakeAppointmentIcon key="icon" />
      },
      {
        text: "Add Patient",
        route: "/addPatient",
        icon: <MakePatientIcon key="icon" />
      }
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
          {index === navOptions.length - 3 && <Divider />}
        </>
      );
    });
  };

  const addAdminLink = () => {
    const adminURL = `http://localhost:3001/admin?api_token=${user.auth_token}`;
    return (
      <>
        <a className={classes.link} href={adminURL} target="_blank">
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <AdminIcon key="icon" />
            </ListItemIcon>
            <ListItemText
              primary="Admin Dashboard"
              className={classes.listItemText}
            />
          </ListItem>
        </a>
      </>
    );
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.appBar} />
      <List>
        {createNavOptions()}
        {user.role === "admin" && addAdminLink()}
      </List>
    </Drawer>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

LeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(LeftDrawer);
