import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'isomorphic-fetch';
import { injectReactEmailAttributes } from 'react-html-email';

import './app.less';
import Routing from './routing/routing';
import store from './store/store';
import TextPopup from '../shared/popup/popupContainer';

injectReactEmailAttributes();

ReactDOM.render((
  <Provider store={store}>
    <div>
      <Routing />
      <TextPopup id="textPopup" />
    </div>
  </Provider>
), document.getElementById('app'));
