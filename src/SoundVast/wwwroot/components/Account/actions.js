/* eslint-disable import/prefer-default-export */

import notOkError from '../shared/fetch/notOkError/notOkError';
import notOkErrorPopup from '../shared/fetch/notOkError/popup/popup';
import { showTextPopup } from '../shared/popup/actions';
import { hideModal } from '../shared/modal/actions';

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

export const showLoginPopup = () => (dispatch) => {
  dispatch(hideModal());
  dispatch(showTextPopup('You have successfully logged in.'));
};

export const showLogoutPopup = () => showTextPopup('You have successfully logged out.');

export const showRegisteredPopup = () => showTextPopup('We have sent you an email to confirm your account registration.');

export const showEmailConfirmationPopup = () => showTextPopup('You have successfully confirmed your email.');

export const showPasswordResetSentPopup = () => (dispatch) => {
  dispatch(hideModal());
  dispatch(showTextPopup('We have sent you an email for you to reset your password.'));
};

export const showPasswordResetPopup = () => showTextPopup('You have successfully reset your password.');
