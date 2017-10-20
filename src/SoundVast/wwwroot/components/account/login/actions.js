/* eslint-disable import/prefer-default-export */

import { showTextPopup } from '../../shared/popup/actions';
import { hideModal } from '../../shared/modal/actions';
import { getAccountDetails } from '../actions';

import notOkError from '../../shared/fetch/errorHandling/notOkError/component';
import notOkErrorPopup from '../../shared/fetch/errorHandling/notOkError/popup/component';
import validationError from '../../shared/fetch/errorHandling/validationError/component';

export const submit = formData => dispatch => fetch('/account/login', {
  method: 'post',
  body: formData,
  credentials: 'same-origin',
}).then(validationError)
  .then(notOkError)
  .then(() => {
    dispatch(getAccountDetails());
    dispatch(hideModal());
    dispatch(showTextPopup('You have successfully logged in.'));
  })
  .catch(notOkErrorPopup(dispatch));
