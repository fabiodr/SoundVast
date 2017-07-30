/* eslint-disable import/prefer-default-export */

import notOkError from '../../../shared/fetch/errorHandling/notOkError/component';
import notOkErrorPopup from '../../../shared/fetch/errorHandling/notOkError/popup/component';
import validationError from '../../../shared/fetch/errorHandling/validationError/component';

export const submit = formData => dispatch =>
  fetch('/account/resetPassword', {
    method: 'post',
    body: formData,
    credentials: 'same-origin',
  }).then(validationError)
    .then(notOkError)
    .catch(notOkErrorPopup(dispatch));
