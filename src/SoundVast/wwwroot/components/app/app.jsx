import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'isomorphic-fetch';

import Routing from './routing';
import store from './store';

ReactDOM.render((
  <Provider store={store}>
    <Routing />
  </Provider>
), document.getElementById('app'));
