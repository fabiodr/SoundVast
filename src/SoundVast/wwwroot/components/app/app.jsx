import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'isomorphic-fetch';
import { CookiesProvider } from 'react-cookie';

import Routing from './routing';
import store from './store';

ReactDOM.render((
  <CookiesProvider>
    <Provider store={store}>
      <Routing />
    </Provider>
  </CookiesProvider>
), document.getElementById('app'));
