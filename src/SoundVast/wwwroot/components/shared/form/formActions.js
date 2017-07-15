/* eslint-disable import/prefer-default-export */

import { change } from 'redux-form';

export const generateAntiForgeryToken = form => dispatch =>
  fetch('/form/generateAntiForgeryToken', {
    method: 'post',
    credentials: 'same-origin',
  }).then(response =>
    response.json().then((json) => {
      dispatch(change(form, '__RequestVerificationToken', json.antiForgeryToken));
    }),
  );
