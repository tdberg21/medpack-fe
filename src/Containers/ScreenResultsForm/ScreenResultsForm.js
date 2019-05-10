import React, { Component } from 'react';

class ScreenResultsForm extends Component {
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
        </form>
      </div>
    );
  }
}

export default ScreenResultsForm;