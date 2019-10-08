import React, { Component } from "react";
import {
  Paper,
  withStyles,
  Typography,
  TextField,
  Button,
  KeyboardTimePicker
} from "@material-ui/core";
import { createAppointment } from "../../util/ApiCalls";
import { addEvents } from "../../util/Actions/events/events";
import { compose } from "recompose";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  button: {
    width: "240px",
    margin: theme.spacing.unit
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  textField: {
    width: "240px"
  },
  title: {
    textAlign: "left"
  }
});

class CreateAppointment extends Component {
  constructor() {
    super();
    this.state = {
      patient: "",
      date: "",
      time: ""
    };
  }

  componentDidMount() {
    console.log(this.props.userInfo);
  }

  saveToState = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmitForm = async event => {
    event.preventDefault();
    const formData = {
      appointment: {
        appointment_result: "scheduled",
        office_id: this.props.userInfo.office_id,
        patient_id: parseInt(this.state.patient),
        user_id: 1,
        start_time: `${this.state.date}T${this.state.time}`,
        duration: 45
      }
    };
    const response = await createAppointment(
      formData,
      this.props.userInfo.auth_token
    );
    this.props.addEvents(formData.appointment);
  };

  render() {
    const { patient, date, time } = this.state;
    const { classes } = this.props;
    return (
      <>
        <Typography className={classes.title} variant="h4">
          Create an Appointment
        </Typography>
        <Paper className={classes.root}>
          <form onSubmit={this.handleSubmitForm} className={classes.form}>
            <TextField
              type="text"
              name="patient"
              value={patient}
              onChange={e => this.saveToState(e)}
              variant="outlined"
              label="Patient ID"
              className={classes.textField}
              margin="normal"
              color="secondary"
            />
            <TextField
              type="date"
              name="date"
              value={date}
              onChange={e => this.saveToState(e)}
              variant="outlined"
              className={classes.textField}
              margin="normal"
              color="secondary"
            />
            <TextField
              type="text"
              name="time"
              value={time}
              onChange={e => this.saveToState(e)}
              variant="outlined"
              label="Time"
              className={classes.textField}
              margin="normal"
              color="secondary"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.user
});

const mapDispatchToProps = dispatch => ({
  addEvents: events => dispatch(addEvents(events))
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CreateAppointment);

// on CDM make call for all users in office
