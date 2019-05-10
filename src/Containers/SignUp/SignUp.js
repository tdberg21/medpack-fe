import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    
  };

  saveToState = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  

  handleSubmitForm = event => {
    event.preventDefault();
    // Check that email is unique
    // Post to server
    this.setState({
      email: '',
      password: ''
    }); 
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <fieldset>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.saveToState}
              />
            </label>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.saveToState}
              />
            </label>
            <button type="submit">Sign Up!</button>
          </fieldset>
        </form>
        <NavLink to='/'>Login</NavLink>
      </div>
    );
  }
}

export default SignUp;