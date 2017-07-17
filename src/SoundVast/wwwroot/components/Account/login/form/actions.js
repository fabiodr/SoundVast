/* eslint-disable import/prefer-default-export */

import { SubmissionError } from 'redux-form';
import { showTextPopup } from '../../../shared/popup/actions';
import { hideModal } from '../../../shared/modal/actions';
import { getAccountDetails } from '../../actions';

export const submit = formData => dispatch =>
fetch('/account/login', {
  method: 'post',
  body: formData,
  credentials: 'same-origin',
}).then((response) => {
  if (response.ok) {
    dispatch(getAccountDetails());
    dispatch(hideModal());
    return dispatch(showTextPopup('You have successfully logged in.'));
  } else if (response.status === 400) {
    return response.json().then((modelErrors) => {
      throw new SubmissionError(modelErrors);
    });
  }
  return null;
});
