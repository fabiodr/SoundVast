import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Content from '../../content/component';
import Header from '../../header/component';
import Account from '../../account/container';
import SocialLoginConfirmation from '../../account/login/socialLogin/confirmation/component';
import SocialLoginFailure from '../../account/login/socialLogin/failure/component';
import ResetPassword from '../../account/resetPassword/form/container';
import ConfirmedEmailSuccess from '../../account/confirmedEmailSuccess/container';
import Profile from '../../user/profile/container';
import Upload from '../../upload/component';
import SongsPage from '../../songsPage/component';
import Error from '../../error/component';

export default () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Account} />
      <Route path="/" component={Header} />
      <Content>
        <Switch>
          <Route exact path="/" component={SongsPage} />
          <Route exact path="/songs" component={SongsPage} />
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
