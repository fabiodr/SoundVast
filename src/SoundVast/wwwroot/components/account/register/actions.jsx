/* eslint-disable import/prefer-default-export */
import React from 'react';
import { renderEmail } from 'react-html-email';

import { showTextPopup } from '../../shared/popup/actions';
import { hideModal } from '../../shared/modal/actions';
import { getAccountDetails } from '../actions';
import { sendEmail } from '../../email/actions';
import ConfirmEmail from '../../email/confirmEmail/confirmEmail';
import notOkError from '../../shared/fetch/notOkError/notOkError';
import notOkErrorPopup from '../../shared/fetch/notOkError/popup/popup';
import validationError from '../../shared/fetch/validationError/validationError';

export const submit = formData => dispatch =>
  fetch('/account/register', {
    method: 'post',
    body: formData,
    credentials: 'same-origin',
  }).then(validationError)
    .then(notOkError)
    .then(response => response.json())
    .then((json) => {
      dispatch(getAccountDetails());
      dispatch(hideModal());
      dispatch(showTextPopup('You have successfully logged in.'));
      const emailMessage = renderEmail(
        <ConfirmEmail confirmEmailLink={json.confirmEmailLink} />,
      );
      dispatch(sendEmail(json.email, emailMessage, 'Confirm Email'));
    })
    .catch(notOkErrorPopup(dispatch));
