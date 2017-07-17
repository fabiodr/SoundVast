/* eslint-disable import/prefer-default-export */
import React from 'react';
import { SubmissionError } from 'redux-form';
import { renderEmail } from 'react-html-email';

import { showTextPopup } from '../../../shared/popup/actions';
import { hideModal } from '../../../shared/modal/actions';
import { sendEmail } from '../../../email/actions';
import ForgotPasswordEmail from '../../../email/forgotPassword/forgotPassword';

export const submit = formData => dispatch =>
fetch('/account/generatePasswordResetLink', {
  method: 'post',
  body: formData,
  credentials: 'same-origin',
}).then((response) => {
  if (response.ok) {
    return response.json().then((json) => {
      const emailMessage = renderEmail(
        <ForgotPasswordEmail resetPasswordLink={json.resetPasswordLink} />,
      );

      dispatch(sendEmail(json.email, emailMessage, 'Reset Password'));
      dispatch(hideModal());
      dispatch(showTextPopup('A password reset link has been sent to your email.'));
    });
  } else if (response.status === 400) {
    return response.json().then((modelErrors) => {
      throw new SubmissionError(modelErrors);
    });
  }
  return null;
});
