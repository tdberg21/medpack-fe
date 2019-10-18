import React, { Component } from "react";
import {
  Button,
  Divider,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  OutlinedInput,
  MenuItem,
  TextField,
  Typography,
  withStyles
} from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import { updateAppointment } from "../../util/ApiCalls";
import { updateEvent } from "../../util/Actions/events/events";

const styles = theme => ({
  root: {},
  actions: {
    padding: theme.spacing.unit * 2
  },
  dialog: {
    // width: 350
  },
  dialogButton: {
    width: 200
  },
  content: {
    width: 350,
    padding: "0 24px"
  },
  textField: {
    // margin: theme.spacing.unit * 2
  }
});

class EditAppointment extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      start_date: "",
      start_time: "",
      end_time: "",
      patient_id: "",
      appointment_result: ""
    };
  }

  componentDidMount() {
    const {
      patient_id,
      appointment_result,
      start_date,
      start_time,
      end_time
    } = this.props.event;
    this.setState({
      patient_id,
      appointment_result,
      start_date,
      start_time,
      end_time
    });
  }

  handleDialog = open => () => {
    this.setState({
      open
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async () => {
    const stateKeys = [
      "start_time",
      "patient_id",
      "appointment_result",
      "start_date",
      "end_time"
    ];
    const appointmentChanges = stateKeys.reduce((acc, key) => {
      if (this.state[key] !== this.props.event[key]) {
        Object.assign(acc, { [key]: this.state[key] });
      }
      return acc;
    }, {});
    const { id } = this.props.event;
    const { user } = this.props;
    const formData = {
      appointment: appointmentChanges
    };
    console.log(appointmentChanges);
    if (Object.keys(appointmentChanges).length) {
      await updateAppointment(user.auth_token, formData, id);
      this.updateEventState(appointmentChanges);
    }
    this.handleDialog(false)();
  };

  updateEventState = changes => {
    const { event } = this.props;
    const updatedEvent = Object.assign(event, changes);
    this.props.updateEvent(event.id, updatedEvent);
  };

  render() {
    const { classes } = this.props;
    const {
      start_time,
      patient_id,
      start_date,
      end_time,
      appointment_result
    } = this.state;

    return (
      <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleDialog(true)}
          className={classes.dialogButton}
        >
          Edit Appointment
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleDialog(false)}
          className={classes.dialog}
        >
          <DialogTitle>
            <Typography variant="h5">Edit Appointment</Typography>
          </DialogTitle>
          <DialogContent className={classes.content}>
            <TextField
              className={classes.textField}
              color="primary"
              variant="outlined"
              type="date"
              value={start_date}
              name="start_date"
              label="Date"
              onChange={this.handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              className={classes.textField}
              color="primary"
              variant="outlined"
              type="text"
              value={start_time}
              label="Start Time"
              name="start_time"
              onChange={this.handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              className={classes.textField}
              color="primary"
              variant="outlined"
              type="text"
              value={end_time}
              label="End Time"
              name="end_time"
              onChange={this.handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              className={classes.textField}
              color="primary"
              variant="outlined"
              type="text"
              value={patient_id}
              label="Patient Id"
              name="patient_id"
              onChange={this.handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              select
              className={classes.select}
              onChange={this.handleChange}
              name="appointment_result"
              value={appointment_result}
              variant="outlined"
              input={<OutlinedInput name="appointment_result" />}
              label="Status"
              fullWidth
              margin="normal"
            >
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="scheduled">Scheduled</MenuItem>
              <MenuItem value="missed">Missed</MenuItem>
              <MenuItem value="rescheduled">Rescheduled</MenuItem>
              <MenuItem value="canceled">Canceled</MenuItem>
              <MenuItem value="attended">Attended</MenuItem>
            </TextField>
          </DialogContent>
          <DialogActions className={classes.actions}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={this.handleDialog(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Submit Changes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  updateEvent: (id, changedEvent) => dispatch(updateEvent(id, changedEvent))
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EditAppointment);
