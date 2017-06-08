/* eslint-disable import/prefer-default-export */

import { SubmissionError } from 'redux-form';

export const submit = formData => () =>
fetch('/account/externalLoginConfirmation', {
  method: 'post',
  body: formData,
  credentials: 'same-origin',
}).then((response) => {
  if (response.redirected) {
    location.href = response.url;
  } else if (response.status === 400) {
    return response.json().then((modelErrors) => {
      throw new SubmissionError(modelErrors);
    });
  }
  return null;
});
