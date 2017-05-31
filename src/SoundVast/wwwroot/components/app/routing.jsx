import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

import Layout from './layout/layout';
import Register from '../user/register/register';

export default () => (
  <DocumentTitle title="SoundVast">
    <BrowserRouter>
      <Route path="/" component={Layout}>
        <Route path="/account/register" component={Register} />
      </Route>
    </BrowserRouter>
  </DocumentTitle>
);
