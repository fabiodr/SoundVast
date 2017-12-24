import noWhiteSpace from '../shared/validation/noWhiteSpace';

const playlistValidation = (values) => {
  const errors = {};

  if (!values.name || !noWhiteSpace(values.name)) {
    errors.name = 'Name is required';
  }

  return errors;
};

export default playlistValidation;
