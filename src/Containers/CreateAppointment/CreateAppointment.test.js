import React from 'react';
import ReactDOM from 'react-dom';
import CreateAppointment from './CreateAppointment';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateAppointment />, div);
  ReactDOM.unmountComponentAtNode(div);
});
