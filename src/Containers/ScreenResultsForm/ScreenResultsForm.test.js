import React from 'react';
import ReactDOM from 'react-dom';
import ScreenResultsForm from './ScreenResultsForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScreenResultsForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
