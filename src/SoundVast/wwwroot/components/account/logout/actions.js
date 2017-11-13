/* eslint-disable import/prefer-default-export */

import { showTextPopup } from '../../shared/popup/actions';
import { getAccountDetails } from '../actions';
import notOkError from '../../shared/fetch/notOkError/notOkError';
import notOkErrorPopup from '../../shared/fetch/notOkError/popup/popup';

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
