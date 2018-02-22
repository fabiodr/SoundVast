import React from 'react';
import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';

import { routeConfig as errorPageRouteConfig } from '../../errorPage/errorPageContainer';
import { routeConfig as uploadRouteConfig } from '../../upload/uploadContainer';
import { routeConfig as socialLoginCallbackRouteConfig } from '../../account/login/socialLogin/socialLoginCallbackContainer';
import { routeConfig as confirmEmailRouteConfig } from '../../account/confirmEmail/confirmEmailContainer';
import { routeConfig as resetPasswordRouteConfig } from '../../account/resetPassword/resetPasswordContainer';
import { routeConfig as radiosRouteConfig } from '../../radios/radiosContainer';
import { routeConfig as primaryLayoutRouteConfig } from '../../layouts/primaryLayout/primaryLayoutContainer';
import { routeConfig as genresRouteConfig } from '../../genres/genresContainer';
import { routeConfig as termsAndConditionsRouteConfig } from '../../legal/termsAndConditionsContainer';
import { routeConfig as privacyPolicyRouteConfig } from '../../legal/privacyPolicyContainer';
import { routeConfig as imprintRouteConfig } from '../../legal/imprintContainer';

export default makeRouteConfig(
  <Route path="/" {...primaryLayoutRouteConfig}>
    <Route {...radiosRouteConfig} />
    <Route path="radios" {...radiosRouteConfig} />
    <Route path="upload" {...uploadRouteConfig} />
    <Route path="genres" {...genresRouteConfig} />
    <Route path="error/:status" {...errorPageRouteConfig} />
    <Route path="account">
      <Route path="externalLoginCallback/:returnUrl" {...socialLoginCallbackRouteConfig} />
      <Route path="resetPassword" {...resetPasswordRouteConfig} />
      <Route path="confirmEmail/:userId/:token" {...confirmEmailRouteConfig} />
    </Route>
    <Route path="termsAndConditions" {...termsAndConditionsRouteConfig} />
    <Route path="privacyPolicy" {...privacyPolicyRouteConfig} />
    <Route path="imprint" {...imprintRouteConfig} />
  </Route>,
);
