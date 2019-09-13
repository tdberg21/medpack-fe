import React, { Component } from 'react';
import { Paper } from '@material-ui/core';

class PatientDetails extends Component {
  constructor() {
    super();
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
