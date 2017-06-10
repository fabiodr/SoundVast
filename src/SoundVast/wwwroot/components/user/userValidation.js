/* eslint-disable no-param-reassign */

const replacePureWhiteSpace = values => Object.keys(values).forEach((key) => {
  values[key] = values[key].replace(/^\s+$/, '');
});

const validation = (values) => {
  const errors = {};
  values = { ...values };

  replacePureWhiteSpace(values);

  if (!values.username) {
    errors.username = 'Username is required';
  } else if (values.username.length > 15) {
    errors.username = 'Must not be more than 15 characters';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^.+@.+$/i.test(values.email)) {
    errors.email = 'Must be a valid email address';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length > 300) {
    errors.password = 'Must not be more than 300 characters';
  }

  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords must match';
  }

  return errors;
};

export default validation;
