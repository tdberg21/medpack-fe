import React, { Component } from 'react';
import { confirmUser } from '../../util/ApiCalls';


class UserConfirmation extends Component {
  render() {

    const splitUrl = this.props.history.location.pathname.split('/user_confirmations/')[1];
    if (splitUrl) {
      console.log(splitUrl);
      const token = splitUrl.split('/confirm_email')[0];
      confirmUser(token);
      // history.push('/success');
      console.log('success')
    }

    return (
      <div>
        User Confirmation..
      </div>
    );
  }
}

export default UserConfirmation;