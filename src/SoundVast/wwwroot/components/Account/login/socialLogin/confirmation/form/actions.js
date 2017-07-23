/* eslint-disable import/prefer-default-export */

import notOkError from '../../../../../shared/fetch/errorHandling/notOkError/notOkError';
import notOkErrorPopup from '../../../../../shared/fetch/errorHandling/notOkError/notOkErrorPopup';
import validationError from '../../../../../shared/fetch/errorHandling/validationError/validationError';

export const submit = formData => dispatch =>
fetch('/account/externalLoginConfirmation', {
  method: 'post',
  body: formData,
  credentials: 'same-origin',
}).then(validationError)
  .then(notOkError)
  .then((response) => {
    if (response.redirected) {
      location.href = response.url;
    }
  })
  .catch(notOkErrorPopup(dispatch));
