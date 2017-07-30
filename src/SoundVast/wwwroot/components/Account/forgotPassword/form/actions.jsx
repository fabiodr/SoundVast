/* eslint-disable import/prefer-default-export */
import React from 'react';
import { renderEmail } from 'react-html-email';

import { showTextPopup } from '../../../shared/popup/actions';
import { hideModal } from '../../../shared/modal/actions';
import { sendEmail } from '../../../email/actions';
import ForgotPasswordEmail from '../../../email/forgotPassword/component';
import notOkError from '../../../shared/fetch/errorHandling/notOkError/component';
import notOkErrorPopup from '../../../shared/fetch/errorHandling/notOkError/popup/component';
import validationError from '../../../shared/fetch/errorHandling/validationError/component';

export const submit = formData => dispatch =>
  fetch('/account/generatePasswordResetLink', {
    method: 'post',
    body: formData,
    credentials: 'same-origin',
  }).then(validationError)
    .then(notOkError)
    .then(response => response.json())
    .then((json) => {
      const emailMessage = renderEmail(
        <ForgotPasswordEmail resetPasswordLink={json.resetPasswordLink} />,
      );

      dispatch(sendEmail(json.email, emailMessage, 'Reset Password'));
      dispatch(hideModal());
      dispatch(showTextPopup('A password reset link has been sent to your email.'));
    })
    .catch(notOkErrorPopup(dispatch));
