import React, { Component } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Typography,
  withStyles
} from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import { updateAppointment } from "../../util/ApiCalls";

const styles = theme => ({
  root: {},
  dialog: {
    // height: 300,
    // width: 400
  },
  content: {
    margin: "15px 0"
  },
  textField: {
    margin: theme.spacing.unit * 2
  }
});

class EditAppointment extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      start: "",
      patient_id: ""
    };
  }

  componentDidMount() {
    const { start, patient_id } = this.props;
    this.setState({ start, patient_id });
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
    // const stateKeys = ["start", "patient_id"];
    // stateKeys.reduce( (acc, key) => {
    //   if(this.state)
    // }, {});
    const { id, user } = this.props;
    const formData = {
      appointment: {
        id,
        patient_id: this.state.patient_id
      }
    };
    updateAppointment(user.auth_token, formData);
  };

  render() {
    const { classes } = this.props;
    const { start, patient_id } = this.state;

    return (
      <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleDialog(true)}
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
              type="text"
              value={start}
              label="Start Time"
              name="start"
              onChange={this.handleChange}
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
            />
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Submit Changes
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleDialog(false)}
            >
              Cancel
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(EditAppointment);
