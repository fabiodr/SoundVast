export const submit = formData => () =>
fetch('account/register', {
  method: 'post',
  body: formData,
});
