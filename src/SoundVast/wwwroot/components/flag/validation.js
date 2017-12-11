import noWhiteSpace from '../shared/validation/noWhiteSpace';

const validation = (values) => {
  const errors = {};

  // if (!values.reason || !noWhiteSpace(values.username)) {
  //   errors.username = 'Username is required';
  // } else if (values.username.length > 15) {
  //   errors.username = 'Must not be more than 15 characters';
  // }

  return errors;
};

export default validation;
