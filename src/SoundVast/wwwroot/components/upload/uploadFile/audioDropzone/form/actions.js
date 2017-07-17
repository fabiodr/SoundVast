/* eslint-disable import/prefer-default-export */

import { SubmissionError } from 'redux-form';

export const submit = ({ __RequestVerificationToken, ...values }) => () =>
  fetch('/upload/save', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      RequestVerificationToken: __RequestVerificationToken,
    },
    body: JSON.stringify(values),
    credentials: 'same-origin',
  }).then((response) => {
    if (response.status === 400) {
      return response.json().then((modelErrors) => {
        throw new SubmissionError(modelErrors);
      });
    }
    return null;
  });
