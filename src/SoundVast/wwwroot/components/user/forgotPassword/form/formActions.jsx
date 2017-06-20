/* eslint-disable import/prefer-default-export */
import React from 'react';
import { SubmissionError } from 'redux-form';
import { renderEmail } from 'react-html-email';

import { sendEmail } from '../../../email/emailActions';
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
    });
  } else if (response.status === 400) {
    return response.json().then((modelErrors) => {
      throw new SubmissionError(modelErrors);
    });
  }
  return null;
});
