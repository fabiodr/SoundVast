/* eslint-disable import/prefer-default-export */

import { showTextPopup } from '../../shared/popup/actions';
import { getAccountDetails } from '../actions';
import notOkError from '../../shared/fetch/errorHandling/notOkError/component';
import notOkErrorPopup from '../../shared/fetch/errorHandling/notOkError/popup/component';

export const submit = formData => dispatch =>
  fetch('/account/logout', {
    method: 'post',
    body: formData,
    credentials: 'same-origin',
  }).then(notOkError)
    .then(() => {
      dispatch(getAccountDetails());
      dispatch(showTextPopup('You have successfully logged out.'));
    })
    .catch(notOkErrorPopup(dispatch));
