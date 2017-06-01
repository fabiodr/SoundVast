import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

import DefaultLayout from './defaultLayout/defaultLayout';
import Register from '../user/register/register';

export default () => (
  <DocumentTitle title="SoundVast">
    <BrowserRouter>
      <DefaultLayout path="/" component={DefaultLayout} />
    </BrowserRouter>
  </DocumentTitle>
);
