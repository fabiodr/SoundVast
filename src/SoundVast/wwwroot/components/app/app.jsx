import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'isomorphic-fetch';
import { injectReactEmailAttributes } from 'react-html-email';
import { Resolver } from 'found-relay';

import 'react-jplaylist/src/less/skins/sleek.less';
import 'react-jplaylist/src/less/controls/iconControls.less';
import './app.less';
import Router from './routing/router';
import store from './store/component';
import environment from './environment/environment';
import TextPopup from '../shared/popup/container';

injectReactEmailAttributes();

const resolver = new Resolver(environment);

ReactDOM.render((
  <Provider store={store}>
    <div>
      <Router resolver={resolver} />
      <TextPopup id="textPopup" />
    </div>
  </Provider>
), document.getElementById('app'));
