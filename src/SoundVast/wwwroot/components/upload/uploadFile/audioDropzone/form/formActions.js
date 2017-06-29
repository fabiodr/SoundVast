/* eslint-disable import/prefer-default-export */

import { SubmissionError } from 'redux-form';

export const submit = formData => () =>
fetch('/upload', {
  method: 'post',
  body: formData,
}).then((response) => {
  if (response.status === 400) {
    return response.json().then((modelErrors) => {
      throw new SubmissionError(modelErrors);
    });
  }
  return null;
});
