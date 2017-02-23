import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import router from './router';
import * as actions from './actions/lists';

import 'react-select/dist/react-select.css';

const store = require('./store/configureStore').configure();

render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app-root'));
