/* eslint-disable import/prefer-default-export */
import { SubmissionError } from 'redux-form';

export const submit = formData => () =>
fetch('/account/generatePasswordResetLink', {
  method: 'post',
  body: formData,
  credentials: 'same-origin',
}).then((response) => {
  if (response.ok) {
    return response.json();
  } else if (response.status === 400) {
    return response.json().then((modelErrors) => {
      throw new SubmissionError(modelErrors);
    });
  }
  return null;
});
