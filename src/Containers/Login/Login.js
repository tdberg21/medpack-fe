import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    username: '',
    password: ''
  };

  saveToState = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    // Send to back end for authentication...
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
            <button type="submit">Sign In!</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Login;