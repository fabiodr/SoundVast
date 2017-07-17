/* eslint-disable import/prefer-default-export */

import { showTextPopup } from '../../../shared/popup/actions';
import { getAccountDetails } from '../../actions';

export const submit = formData => dispatch =>
fetch('/account/logout', {
  method: 'post',
  body: formData,
  credentials: 'same-origin',
}).then((response) => {
  if (response.ok) {
    dispatch(getAccountDetails());
    return dispatch(showTextPopup('You have successfully logged out.'));
  }
  return null;
});
