/* eslint-disable import/prefer-default-export */

import { change } from 'redux-form';

import notOkError from '../../shared/fetch/notOkError/notOkError';
import notOkErrorPopup from '../../shared/fetch/notOkError/popup/popup';

export const generateAntiForgeryToken = form => dispatch =>
  fetch('/form/generateAntiForgeryToken', {
    method: 'post',
    credentials: 'same-origin',
  }).then(notOkError)
    .then(response => response.json())
    .then((json) => {
      dispatch(change(form, '__RequestVerificationToken', json.antiForgeryToken));
    })
    .catch(notOkErrorPopup(dispatch));
