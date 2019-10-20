import React, { Component } from "react";
import {
  withStyles,
  Fab,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { getPatients } from "../../util/ApiCalls";
import { PatientDetails } from "..";
import ViewIcon from "@material-ui/icons/ChevronRight";
import { NavLink, Link } from "react-router-dom";
import { compose } from "recompose";
import { connect } from "react-redux";

const styles = theme => ({
  root: {},
  label: {
    textAlign: "left",
    marginBottom: theme.spacing.unit * 2
  },
  card: {
    minWidth: 275,
    margin: theme.spacing.unit * 3
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class Patients extends Component {
  componentDidMount() {}

  renderPatients = () => {
    return this.props.patients.map(patient => {
      return <PatientDetails patient={patient} />;
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Typography className={classes.label} variant="h4">
          Patients
        </Typography>
        <Paper className={classes.root}>{this.renderPatients()}</Paper>
        <NavLink to="/app/addPatient">
          <Fab color="secondary" aria-label="Add" className={classes.fab}>
            <AddIcon />
          </Fab>
        </NavLink>
      </>
    );
  }
}

const mapStateToProps = state => ({
  patients: state.patients
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(Patients);
