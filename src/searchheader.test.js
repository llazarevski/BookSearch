  
import React from 'react';
import ReactDOM from 'react-dom';
import SearchHeader from './searchheader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});