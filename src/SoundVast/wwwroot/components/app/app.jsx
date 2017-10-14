import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'isomorphic-fetch';
import { injectReactEmailAttributes } from 'react-html-email';
import { QueryRenderer, graphql } from 'react-relay';

import 'react-jplaylist/src/less/skins/sleek.less';
import 'react-jplaylist/src/less/controls/iconControls.less';
import './component.less';
import Routing from './routing/component';
import store from './store/component';
import TextPopup from '../shared/popup/container';
import environment from './environment/environment';

injectReactEmailAttributes();

const render = ({ error, props }) => {
  if (error) {
    return <div>{error.message}</div>;
  } else if (props) {
    return (
      <div>
        <Routing />
        <TextPopup id="textPopup" />
      </div>
    );
  }
  return <div>Loading</div>;
};

const query = graphql`
  query appQuery {
    song {
      ...songsContainer_songs
    }
  }
`;

ReactDOM.render((
  <Provider store={store}>
    <QueryRenderer environment={environment} query={query} render={render} />
  </Provider>
), document.getElementById('app'));
