import React, { Component } from 'react';

class CreateAppointment extends Component {
  state = {};

  saveToState = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    this.setState({
    
    }); 
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateAppointment;