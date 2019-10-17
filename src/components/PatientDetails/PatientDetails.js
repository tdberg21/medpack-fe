import React, { Component } from "react";
// import {  } from '@material-ui/core';

class PatientDetails extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { patientInfo } = this.props;
    console.log(patientInfo);
    return (
      <>
        <p>Patient Details undergoing construction</p>
      </>
    );
  }
}

export default PatientDetails;
