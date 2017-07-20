import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Content from '../../content/content';
import Header from '../../header/header';
import Account from '../../account/container';
import SocialLoginConfirmation from '../../account/login/socialLogin/confirmation/confirmation';
import SocialLoginFailure from '../../account/login/socialLogin/failure/failure';
import ResetPassword from '../../account/resetPassword/form/container';
import ConfirmedEmailSuccess from '../../account/confirmedEmailSuccess/container';
import Profile from '../../user/profile/container';
import Upload from '../../upload/upload';
import Music from '../../music/container';
import Error from '../../error/error';

export default () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Account} />
      <Route path="/" component={Header} />
      <Content>
        <Switch>
          <Route exact path="/" component={Music} />
          <Route exact path="/account/externalLoginConfirmation" component={SocialLoginConfirmation} />
          <Route exact path="/account/externalLoginFailure" component={SocialLoginFailure} />
          <Route exact path="/account/resetPassword" component={ResetPassword} />
          <Route exact path="/account/successfullyConfirmedEmail" component={ConfirmedEmailSuccess} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/error" component={Error} />
        </Switch>
      </Content>
    </div>
  </BrowserRouter>
);
