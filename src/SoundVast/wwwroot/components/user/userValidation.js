import ERROR_MESSAGES from '../shared/form/validation/errorMessages';

const validate = (values) => {
  const errors = {};

  if (values.username === undefined) {
    errors.username = ERROR_MESSAGES.required;
  } else if (!/^\S+$/.test(values.username)) {
    errors.username = ERROR_MESSAGES.nonSpace;
  } else if (values.username.length > 15) {
    errors.username = ERROR_MESSAGES.length15;
  }

  if (values.email === undefined) {
    errors.email = ERROR_MESSAGES.required;
  } else if (!/^.+@.+$/i.test(values.email)) {
    errors.email = ERROR_MESSAGES.invalidEmail;
  }

  if (values.password === undefined) {
    errors.password = ERROR_MESSAGES.required;
  } else if (values.password.length > 300) {
    errors.password = ERROR_MESSAGES.length300;
  }

  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = ERROR_MESSAGES.invalidConfirmPassword;
  }

  return errors;
};

export default validate;
