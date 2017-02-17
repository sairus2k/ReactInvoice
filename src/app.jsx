import React from 'react';
import { render } from 'react-dom';

import router from './router';

import 'react-select/dist/react-select.css';

render(
  <div>
    {router}
  </div>,
  document.getElementById('app-root'));
