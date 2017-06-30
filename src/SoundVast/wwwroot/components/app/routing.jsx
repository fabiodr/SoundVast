import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Content from './content/content';
import FrontPage from '../frontPage/frontPage';
import Header from '../header/header';
import User from '../user/userContainer';
import SocialLoginConfirmation from '../user/login/socialLogin/confirmation/confirmation';
import SocialLoginFailure from '../user/login/socialLogin/failure/failure';
import ResetPassword from '../user/resetPassword/form/formContainer';
import ConfirmedEmailSuccess from '../user/confirmedEmailSuccess/confirmedEmailSuccessContainer';
import Upload from '../upload/upload';
import Error from '../error/error';

export default () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={User} />
      <Route path="/" component={Header} />
      <Content>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/Account/ExternalLoginConfirmation" component={SocialLoginConfirmation} />
          <Route exact path="/Account/ExternalLoginFailure" component={SocialLoginFailure} />
          <Route exact path="/Account/ResetPassword" component={ResetPassword} />
          <Route exact path="/Account/SuccessfullyConfirmedEmail" component={ConfirmedEmailSuccess} />
          <Route exact path="/Upload" component={Upload} />
          <Route exact path="/Error" component={Error} />
        </Switch>
      </Content>
    </div>
  </BrowserRouter>
);
