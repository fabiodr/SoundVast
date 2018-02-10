import React from 'react';
import ReactDOM from 'react-dom';
import 'react-jplaylist/src/less/skins/sleek.less';
import 'react-jplaylist/src/less/controls/iconControls.less';
import 'react-select/dist/react-select.css';
import 'rc-slider/assets/index.css';

import '../shared/fetch/fetch';
import './app.less';
import App from './app';

ReactDOM.render(<App />, document.getElementById('app'));
