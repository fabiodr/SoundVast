import noWhiteSpace from './noWhiteSpace';

const audioValidation = (values) => {
  const errors = {};

  if (!values.name || !noWhiteSpace(values.name)) {
    errors.name = 'Name is required';
  }

  if (!values.liveStreamUrl || !noWhiteSpace(values.liveStreamUrl)) {
    errors.liveStreamUrl = 'The live stream Url is required';
  }

  return errors;
};

export default audioValidation;
