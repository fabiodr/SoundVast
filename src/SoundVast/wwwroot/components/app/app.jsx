import React from 'react';
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

const resolver = new Resolver(environment);

console.log("Test")

const App = () => (
  <Provider store={store}>
    <Router matchContext={{ store }} resolver={resolver} />
  </Provider>
);

export default App;
