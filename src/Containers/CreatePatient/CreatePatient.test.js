import React from 'react';
import ReactDOM from 'react-dom';
import CreatePatient from './CreatePatient';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreatePatient />, div);
  ReactDOM.unmountComponentAtNode(div);
});
