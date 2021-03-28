import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { hot } from 'react-hot-loader/root';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
