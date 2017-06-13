/* eslint-disable import/prefer-default-export */

export const submit = formData => () =>
fetch('/account/generatePasswordResetLink', {
  method: 'post',
  body: formData,
  credentials: 'same-origin',
}).then((response) => {
  if (response.ok) {
    return response.json();
  }
  return null;
});

export const sendEmail = (email, emailMessage) => () =>
fetch('/account/sendResetPasswordEmail', {
  method: 'post',
  body: {
    email,
    emailMessage,
  },
}).then((response) => {
  if (response.ok) {

  }
  return null;
});
