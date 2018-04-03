import 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-jplaylist/dist/css/skins/sleek.css';
import 'react-jplaylist/dist/css/controls/iconControls.css';
import 'react-select/dist/react-select.css';
import 'rc-slider/assets/index.css';
import { compose, lifecycle } from 'recompose';

import '../shared/fetch/fetch';
import './app.less';
import App from './app';
import commentSubscription from '../comments/commentSubscription';

const enhance = compose(
  lifecycle({
    componentDidMount() {
      commentSubscription();
    },
  }),
);

const AppContainer = enhance(App);

ReactDOM.render(<AppContainer />, document.getElementById('app'));
