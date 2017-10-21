/* eslint-disable import/prefer-default-export */

import notOkError from '../../../shared/fetch/notOkError/notOkError';
import notOkErrorPopup from '../../../shared/fetch/notOkError/popup/popup';
import validationError from '../../../shared/fetch/validationError/validationError';

export const submit = formData => dispatch => fetch('/account/externalLoginConfirmation', {
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
