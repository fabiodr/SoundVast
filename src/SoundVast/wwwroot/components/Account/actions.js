/* eslint-disable import/prefer-default-export */

import notOkError from '../shared/fetch/notOkError/notOkError';
import notOkErrorPopup from '../shared/fetch/notOkError/popup/popup';

export const getAccountDetails = () => dispatch =>
  fetch('/account/getAccountDetails', {
    credentials: 'same-origin',
  }).then(notOkError)
    .then(response => response.json())
    .then(json => dispatch({
      type: 'GET_ACCOUNT_DETAILS',
      userName: json.userName,
      isLoggedIn: json.isLoggedIn,
      isAdmin: json.isAdmin,
    }))
    .catch(notOkErrorPopup(dispatch));
