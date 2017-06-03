import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import DefaultLayout from './defaultLayout/defaultLayout';
import FrontPage from '../frontPage/frontPage';

export default () => (
  <BrowserRouter>
    <DefaultLayout path="/" component={FrontPage} />
  </BrowserRouter>
);
