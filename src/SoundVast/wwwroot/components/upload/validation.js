import noWhiteSpace from '../shared/validation/noWhiteSpace';

const validation = (values) => {
  const errors = {};

  if (!values.name || !noWhiteSpace(values.name)) {
    errors.name = 'Name is required';
  }

  if (!values.liveStreamURL || !noWhiteSpace(values.name)) {
    errors.liveStreamURL = 'The live stream URL is required';
  }

  return errors;
};

export default validation;
