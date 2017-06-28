/* eslint-disable import/prefer-default-export */

import { showTextPopup } from '../../../shared/popup/popupActions';
import { getUserDetails } from '../../userActions';

export const submit = formData => dispatch =>
fetch('/account/logout', {
  method: 'post',
  body: formData,
  credentials: 'same-origin',
}).then((response) => {
  if (response.ok) {
    dispatch(getUserDetails());
    return dispatch(showTextPopup('You have successfully logged out.'));
  }
  return null;
});
