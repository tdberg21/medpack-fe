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

  handleSubmit = () => {
    // api call
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

export default withStyles(styles)(EditAppointment);
