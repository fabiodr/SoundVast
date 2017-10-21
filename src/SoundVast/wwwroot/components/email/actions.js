/* eslint-disable import/prefer-default-export */

import notOkError from '../shared/fetch/notOkError/notOkError';
import notOkErrorPopup from '../shared/fetch/notOkError/popup/popup';

export const sendEmail = (email, message, subject) => dispatch =>
  fetch('/email/sendEmail', {
    method: 'post',
    body: JSON.stringify({
      email,
      message,
      subject,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(notOkError)
    .catch(notOkErrorPopup(dispatch));
