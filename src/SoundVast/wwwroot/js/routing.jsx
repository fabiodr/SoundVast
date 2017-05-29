import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

import Layout from './layout/layout';
import FrontPage from './frontPage/frontPage';

export default () => (
  <DocumentTitle title="SoundVast">
    <BrowserRouter history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={FrontPage} />
      </Route>
    </BrowserRouter>
  </DocumentTitle>
);
