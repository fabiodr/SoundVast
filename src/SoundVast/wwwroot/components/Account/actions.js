/* eslint-disable import/prefer-default-export */

import { showTextPopup } from '../shared/popup/actions';
import { hideModal } from '../shared/modal/actions';

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
