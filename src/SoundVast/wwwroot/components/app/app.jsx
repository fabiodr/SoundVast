import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'isomorphic-fetch';
import { injectReactEmailAttributes } from 'react-html-email';

import './app.less';
import Routing from './routing';
import store from './store';
import LoginSuccessMessage from '../user/login/successMessage/successMessage';
import LogoutSuccessMessage from '../user/logout/successMessage/successMessage';

injectReactEmailAttributes();

ReactDOM.render((
  <Provider store={store}>
    <div>
      <Routing />
      <LoginSuccessMessage />
      <LogoutSuccessMessage />
    </div>
  </Provider>
), document.getElementById('app'));
