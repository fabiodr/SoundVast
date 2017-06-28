/* eslint-disable import/prefer-default-export */
import React from 'react';
import { SubmissionError } from 'redux-form';
import { renderEmail } from 'react-html-email';

import { showTextPopup } from '../../../shared/popup/popupActions';
import { hideModal } from '../../../shared/modal/modalActions';
import { getUserDetails } from '../../userActions';
import { sendEmail } from '../../../email/emailActions';
import ConfirmEmail from '../../../email/confirmEmail/confirmEmail';

export const submit = formData => dispatch =>
fetch('/account/register', {
  method: 'post',
  body: formData,
  credentials: 'same-origin',
}).then((response) => {
  if (response.ok) {
    dispatch(getUserDetails());
    dispatch(hideModal());
    dispatch(showTextPopup('You have successfully logged in.'));

    return response.json().then((json) => {
      const emailMessage = renderEmail(
        <ConfirmEmail confirmEmailLink={json.confirmEmailLink} />,
      );
      dispatch(sendEmail(json.email, emailMessage, 'Confirm Email'));
    });
  } else if (response.status === 400) {
    return response.json().then((modelErrors) => {
      throw new SubmissionError(modelErrors);
    });
  }
  return null;
});
