import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FrontPage from '../frontPage/frontPage';
import Header from '../header/header';
import User from '../user/userContainer';
import SocialLoginConfirmation from '../user/login/socialLogin/confirmation/confirmation';

export default () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={User} />
      <Route path="/" component={Header} />
      <Switch>
        <Route exact path="/" component={FrontPage} />
        <Route exact path="/Account/ExternalLoginConfirmation" component={SocialLoginConfirmation} />
      </Switch>
    </div>
  </BrowserRouter>
);
