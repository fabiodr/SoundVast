import React from 'react';
import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';

import SocialLoginConfirmation from '../../account/login/socialLogin/socialLoginConfirmation';
import SocialLoginFailure from '../../account/login/socialLogin/socialLoginFailure';
import ResetPassword from '../../account/resetPassword/resetPasswordContainer';
import ConfirmedEmailSuccess from '../../account/confirmedEmailSuccess/confirmedEmailSuccessContainer';
import Profile from '../../user/profile/userProfileContainer';
import Upload, { query as uploadQuery } from '../../upload/upload';
import { routeConfig as accountContainerRouteConfig } from '../../account/accountContainer';
import { routeConfig as songsContainerRouteConfig } from '../../songs/songsContainer';
import { routeConfig as primaryLayoutContainerRouteConfig } from '../../layouts/primaryLayout/primaryLayoutContainer';
import Error from '../../error/error';

export default makeRouteConfig(
  <Route path="/">
    <Route {...primaryLayoutContainerRouteConfig}>
      <Route {...accountContainerRouteConfig} />
      <Route {...songsContainerRouteConfig} />
      <Route path="account">
        <Route path="externalLoginConfirmation" Component={SocialLoginConfirmation} />
        <Route path="externalLoginFailure" Component={SocialLoginFailure} />
        <Route path="resetPassword" Component={ResetPassword} />
        <Route path="successfullyConfirmedEmail" Component={ConfirmedEmailSuccess} />
      </Route>
      <Route path="upload" Component={Upload} query={uploadQuery} />
      <Route path="profile" Component={Profile} />
      <Route path="error" Component={Error} />
    </Route>
  </Route>,
);
