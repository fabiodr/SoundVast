/* eslint-disable import/prefer-default-export */

import notOkError from '../../../shared/fetch/errorHandling/notOkError/component';
import notOkErrorPopup from '../../../shared/fetch/errorHandling/notOkError/popup/component';

export const getSocialLogins = () => dispatch =>
  fetch('/account/getSocialLogins')
    .then(notOkError)
    .then(response => response.json())
    .then((json) => {
      dispatch({
        type: 'GET_SOCIAL_LOGINS',
        loginProviders: json.loginProviders,
      });
    })
    .catch(notOkErrorPopup(dispatch));
