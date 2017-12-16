import React from 'react';
import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';

import { routeConfig as profileRouteConfig } from '../../profile/userProfileContainer';
import { routeConfig as errorPageRouteConfig } from '../../errorPage/errorPageContainer';
import { routeConfig as uploadRouteConfig } from '../../upload/uploadContainer';
import { routeConfig as socialLoginCallbackRouteConfig } from '../../account/login/socialLogin//socialLoginCallbackContainer';
import { routeConfig as confirmEmailRouteConfig } from '../../account/confirmEmail/confirmEmailContainer';
import { routeConfig as resetPasswordRouteConfig } from '../../account/resetPassword/resetPasswordContainer';
import { routeConfig as songsRouteConfig } from '../../songs/songsContainer';
import { routeConfig as radiosRouteConfig } from '../../radios/radiosContainer';
import { routeConfig as primaryLayoutRouteConfig } from '../../layouts/primaryLayout/primaryLayoutContainer';
import { routeConfig as genresRouteConfig } from '../../genres/genresContainer';
import { routeConfig as legalRouteConfig } from '../../legal/legalContainer';

export default makeRouteConfig(
  <Route path="/" {...primaryLayoutRouteConfig}>
    <Route {...songsRouteConfig} />
    <Route path="songs/:genre?" {...songsRouteConfig} />
    <Route path="radios/:genre?" {...radiosRouteConfig} />
    <Route path="upload" {...uploadRouteConfig} />
    <Route path="profile" {...profileRouteConfig} />
    <Route path="genres/:type" {...genresRouteConfig} />
    <Route path="error/:status" {...errorPageRouteConfig} />
    <Route path="account">
      <Route path="externalLoginCallback/:returnUrl" {...socialLoginCallbackRouteConfig} />
      <Route path="resetPassword" {...resetPasswordRouteConfig} />
      <Route path="confirmEmail/:userId/:token" {...confirmEmailRouteConfig} />
    </Route>
    <Route path="legal" {...legalRouteConfig} />
  </Route>,
);
