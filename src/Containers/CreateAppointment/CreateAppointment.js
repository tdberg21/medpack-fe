import React, { Component } from "react";
import {
  Paper,
  withStyles,
  Typography,
  TextField,
  Button,
  MenuItem,
  OutlinedInput
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
  time: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 520
  },
  select: {
    width: 120,
    marginLeft: 15,
    marginTop: 7
  },
  title: {
    textAlign: "left",
    marginBottom: theme.spacing.unit * 2
  }
});

class CreateAppointment extends Component {
  constructor() {
    super();
    this.state = {
      patient: "",
      date: "",
      time: "",
      meridiem: ""
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
        start_time: `${this.state.date}T${this.state.time}${this.state.meridiem}`,
        duration: 45
      }
    };
    const newAppointment = await createAppointment(
      formData,
      this.props.userInfo.auth_token
    );
    const appointmentId = newAppointment.new_appointment.data.id;
    this.addEventToCalendar(appointmentId);
    this.props.history.push("/app");
  };

  addEventToCalendar = id => {
    const endTime = this.addDuration(this.state.time);
    const eventData = {
      appointment_result: "scheduled",
      id,
      office_id: this.props.userInfo.office_id,
      patient_id: parseInt(this.state.patient),
      start: `${this.state.date}T${this.state.time}`,
      end: `${this.state.date}T${endTime}`,
      url: `http://localhost:3000/app/appointment/${id}`
    };
    this.props.addEvents([eventData]);
  };

  addDuration = time => {
    const endTime = j => {
      return (j < 10 ? "0" : "") + j;
    };
    const piece = time.split(":");
    const mins = piece[0] * 60 + +piece[1] + +45;
    return endTime(((mins % 1440) / 60) | 0) + ":" + endTime(mins % 60);
  };

  render() {
    const { patient, date, time, meridiem } = this.state;
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
            <div className={classes.time}>
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
              <TextField
                select
                className={classes.select}
                onChange={e => this.saveToState(e)}
                name="meridiem"
                value={meridiem}
                variant="outlined"
                input={<OutlinedInput name="meridiem" />}
                label="Meridiem"
              >
                <MenuItem value="AM">AM</MenuItem>
                <MenuItem value="PM">PM</MenuItem>
              </TextField>
            </div>
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
