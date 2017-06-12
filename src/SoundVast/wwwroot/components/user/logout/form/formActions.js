/* eslint-disable import/prefer-default-export */

import { showPopup } from '../../../shared/popup/popupActions';
import { getUserDetails } from '../../userActions';

export const submit = formData => dispatch =>
fetch('/account/logout', {
  method: 'post',
  body: formData,
  credentials: 'same-origin',
}).then((response) => {
  if (response.ok) {
    dispatch(getUserDetails());
    return dispatch(showPopup('logout'));
  }
  return null;
});
