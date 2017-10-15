import React from 'react';
import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';

import PrimaryLayout from '../../layouts/primaryLayout/primaryLayout';
import SocialLoginConfirmation from '../../account/login/socialLogin/confirmation/component';
import SocialLoginFailure from '../../account/login/socialLogin/failure/component';
import ResetPassword from '../../account/resetPassword/form/container';
import ConfirmedEmailSuccess from '../../account/confirmedEmailSuccess/container';
import Profile from '../../user/profile/container';
import Upload from '../../upload/component';
import Songs, { query as songsQuery } from '../../songs/songsContainer';
// import Radios from '../../radios/container';
import Error from '../../error/component';

export default makeRouteConfig(
  <Route path="/">
    <Route Component={PrimaryLayout}>
      <Route path="/" Component={Songs} query={songsQuery} />
      {/* <Route path="/songs" Component={Songs} query={songsQuery} /> */}
      {/* <Route exact path="/radios" component={Radios} /> */}
      <Route path="account">
        <Route path="externalLoginConfirmation" Component={SocialLoginConfirmation} />
        <Route path="externalLoginFailure" Component={SocialLoginFailure} />
        <Route path="resetPassword" Component={ResetPassword} />
        <Route path="successfullyConfirmedEmail" Component={ConfirmedEmailSuccess} />
      </Route>
      <Route path="upload" Component={Upload} />
      <Route path="profile" Component={Profile} />
      <Route path="error" Component={Error} />
    </Route>
  </Route>,
);
