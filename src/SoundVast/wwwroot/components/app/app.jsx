import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Resolver } from 'found-relay';
import 'react-jplaylist/src/less/skins/sleek.less';
import 'react-jplaylist/src/less/controls/iconControls.less';
import 'react-select/dist/react-select.css';
import 'rc-slider/assets/index.css';

import '../shared/fetch/fetch';
import './app.less';
import Router from './routing/router';
import store from './store/store';
import environment from './environment/environment';
import ErrorBoundary from './ErrorBoundary';

const resolver = new Resolver(environment);

ReactDOM.render((
  <ErrorBoundary>
    <Provider store={store}>
      <div>
        <Router matchContext={{ store }} resolver={resolver} />
      </div>
    </Provider>
  </ErrorBoundary>
), document.getElementById('app'));
