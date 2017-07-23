/* eslint-disable import/prefer-default-export */

import notOkError from '../../../shared/fetch/errorHandling/notOkError/notOkError';
import notOkErrorPopup from '../../../shared/fetch/errorHandling/notOkError/notOkErrorPopup';

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
