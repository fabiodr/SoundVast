import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

import DefaultLayout from './defaultLayout/defaultLayout';
import FrontPage from '../frontPage/frontPage';

export default () => (
  <DocumentTitle title="SoundVast">
    <BrowserRouter>
      <DefaultLayout path="/" component={FrontPage} />
    </BrowserRouter>
  </DocumentTitle>
);
