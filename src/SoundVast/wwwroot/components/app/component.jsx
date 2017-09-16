import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'isomorphic-fetch';
import { injectReactEmailAttributes } from 'react-html-email';

import 'react-jplaylist/src/less/skins/sleek.less';
import 'react-jplaylist/src/less/controls/iconControls.less';
import './component.less';
import Routing from './routing/component';
import store from './store/component';
import TextPopup from '../shared/popup/container';

injectReactEmailAttributes();

ReactDOM.render((
  <Provider store={store}>
    <div>
      <Routing />
      <TextPopup id="textPopup" />
    </div>
  </Provider>
), document.getElementById('app'));
