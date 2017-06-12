/* eslint-disable import/prefer-default-export */

import { SubmissionError } from 'redux-form';
import { showPopup } from '../../../shared/popup/popupActions';
import { hideModal } from '../../../shared/modal/modalActions';
import { getUserDetails } from '../../userActions';

export const submit = formData => dispatch =>
fetch('/account/register', {
  method: 'post',
  body: formData,
  credentials: 'same-origin',
}).then((response) => {
  if (response.ok) {
    dispatch(getUserDetails());
    dispatch(hideModal());
    return dispatch(showPopup('login'));
  } else if (response.status === 400) {
    return response.json().then((modelErrors) => {
      throw new SubmissionError(modelErrors);
    });
  }
  return null;
});
