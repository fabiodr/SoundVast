/* eslint-disable import/prefer-default-export */
import React from 'react';
import { renderEmail } from 'react-html-email';

import { showTextPopup } from '../../shared/popup/actions';
import { hideModal } from '../../shared/modal/actions';
import { sendEmail } from '../../email/actions';
import ForgotPasswordEmail from '../../email/forgotPasswordEmail/forgotPasswordEmail';
import notOkError from '../../shared/fetch/notOkError/notOkError';
import notOkErrorPopup from '../../shared/fetch/notOkError/popup/popup';
import validationError from '../../shared/fetch/validationError/validationError';

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
