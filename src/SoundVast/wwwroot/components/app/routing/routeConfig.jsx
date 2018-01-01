import React from 'react';
import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';

import { routeConfig as userProfileRouteConfig } from '../../profile/userProfileContainer';
import { routeConfig as userPlaylistsRouteConfig } from '../../profile/userPlaylistsContainer';
import { routeConfig as userLikedAudiosRouteConfig } from '../../profile/userLikedAudiosContainer';
import { routeConfig as userUploadsRouteConfig } from '../../profile/userUploadsContainer';
import { routeConfig as errorPageRouteConfig } from '../../errorPage/errorPageContainer';
import { routeConfig as uploadRouteConfig } from '../../upload/uploadContainer';
import { routeConfig as socialLoginCallbackRouteConfig } from '../../account/login/socialLogin//socialLoginCallbackContainer';
import { routeConfig as confirmEmailRouteConfig } from '../../account/confirmEmail/confirmEmailContainer';
import { routeConfig as resetPasswordRouteConfig } from '../../account/resetPassword/resetPasswordContainer';
import { routeConfig as songsRouteConfig } from '../../songs/songsContainer';
import { routeConfig as radiosRouteConfig } from '../../radios/radiosContainer';
import { routeConfig as primaryLayoutRouteConfig } from '../../layouts/primaryLayout/primaryLayoutContainer';
import { routeConfig as songGenresRouteConfig } from '../../genres/songGenresContainer';
import { routeConfig as radioGenresRouteConfig } from '../../genres/radioGenresContainer';
import { routeConfig as songPendingEditContainer } from '../../edit/songPendingEditContainer';
import { routeConfig as copyrightRouteConfig } from '../../legal/copyrightContainer';
import { routeConfig as termsAndConditionsRouteConfig } from '../../legal/termsAndConditionsContainer';
import { routeConfig as privacyPolicyRouteConfig } from '../../legal/privacyPolicyContainer';

export default makeRouteConfig(
  <Route path="/" {...primaryLayoutRouteConfig}>
    <Route {...songsRouteConfig} />
    <Route path="songs/:genre?" {...songsRouteConfig} />
    <Route path="radios/:genre?" {...radiosRouteConfig} />
    <Route path="review" {...songPendingEditContainer} />
    <Route path="upload" {...uploadRouteConfig} />
    <Route path="profile" {...userProfileRouteConfig}>
      <Route {...userPlaylistsRouteConfig} />
      <Route path="playlists" {...userPlaylistsRouteConfig} />
      <Route path="liked" {...userLikedAudiosRouteConfig} />
      <Route path="uploads" {...userUploadsRouteConfig} />
    </Route>
    <Route path="genres/songs" {...songGenresRouteConfig} />
    <Route path="genres/radios" {...radioGenresRouteConfig} />
    <Route path="error/:status" {...errorPageRouteConfig} />
    <Route path="account">
      <Route path="externalLoginCallback/:returnUrl" {...socialLoginCallbackRouteConfig} />
      <Route path="resetPassword" {...resetPasswordRouteConfig} />
      <Route path="confirmEmail/:userId/:token" {...confirmEmailRouteConfig} />
    </Route>
    <Route path="copyright" {...copyrightRouteConfig} />
    <Route path="termsAndConditions" {...termsAndConditionsRouteConfig} />
    <Route path="privacyPolicy" {...privacyPolicyRouteConfig} />
  </Route>,
);
