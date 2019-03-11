import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import { App } from './App';
import './style/index.scss';
import { Register } from './store/register';

ReactDOM.render(
  <Provider registerStore={new Register()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
