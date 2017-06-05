import { SubmissionError } from 'redux-form';

export const submit = formData => () =>
fetch('account/register', {
  method: 'post',
  body: formData,
  credentials: 'same-origin',
}).then((response) => {
  if (response.status === 400) {
    return response.json().then((modelErrors) => {
      throw new SubmissionError(modelErrors);
    });
  }
  return null;
});
