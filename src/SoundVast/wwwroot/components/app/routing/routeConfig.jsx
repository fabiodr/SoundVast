import React from 'react';
import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';

import Profile from '../../user/profile/userProfileContainer';
import Upload, { query as uploadQuery } from '../../upload/upload';
import { routeConfig as socialLoginCallbackContainerRouteConfig } from '../../account/login/socialLogin//socialLoginCallbackContainer';
import { routeConfig as confirmEmailContainerRouteConfig } from '../../account/confirmEmail/confirmEmailContainer';
import { routeConfig as resetPasswordContainerRouteConfig } from '../../account/resetPassword/resetPasswordContainer';
import { routeConfig as songsContainerRouteConfig } from '../../songs/songsContainer';
import { routeConfig as primaryLayoutContainerRouteConfig } from '../../layouts/primaryLayout/primaryLayoutContainer';
import Error from '../../error/error';

export default makeRouteConfig(
  <Route path="/" {...primaryLayoutContainerRouteConfig}>
    <Route {...songsContainerRouteConfig} />
    <Route path="songs" {...songsContainerRouteConfig} />
    <Route path="account">
      <Route path="externalLoginCallback/:returnUrl" {...socialLoginCallbackContainerRouteConfig} />
      <Route path="resetPassword" {...resetPasswordContainerRouteConfig} />
      <Route path="confirmEmail/:userId/:token" {...confirmEmailContainerRouteConfig} />
    </Route>
    <Route path="upload" Component={Upload} query={uploadQuery} />
    <Route path="profile" Component={Profile} />
    <Route path="error" Component={Error} />
  </Route>,
);
