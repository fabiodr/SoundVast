/* eslint-disable import/prefer-default-export */

export const sendEmail = (email, message, subject) => () =>
fetch('/email/sendEmail', {
  method: 'post',
  body: JSON.stringify({
    email,
    message,
    subject,
  }),
  headers: {
    'Content-Type': 'application/json',
  },
}).then((response) => {
  if (response.ok) {

  }
  return null;
});
