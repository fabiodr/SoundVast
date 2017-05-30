import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

import Layout from './layout';
import FrontPage from '../frontPage/frontPage';

export default () => (
  <DocumentTitle title="SoundVast">
    <BrowserRouter>
      <Route path="/" component={Layout}>
        <Switch>
          <Route path="/" component={FrontPage} />
        </Switch>
      </Route>
    </BrowserRouter>
  </DocumentTitle>
);
