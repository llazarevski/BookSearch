  
import React from 'react';
import ReactDOM from 'react-dom';
import Filters from './filters';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Filters />, div);
  ReactDOM.unmountComponentAtNode(div);
});