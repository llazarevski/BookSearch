  
import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './searchform';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});