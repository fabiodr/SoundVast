import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { compose, withHandlers, withProps, setPropTypes } from 'recompose';

import CommentBox from './commentBox';
import commentMutation from './commentMutation';

const handlers = {
  onSubmit: ({ currentAudioId, originalCommentId }) => (input) => {
    commentMutation(input, currentAudioId, originalCommentId);
  },
};

const propTypes = {
  currentAudioId: PropTypes.number.isRequired,
  originalCommentId: PropTypes.number,
};

// https://github.com/erikras/redux-form/issues/2886
const createProps = ({ currentAudioId }) => {
  const name = `commentBox_${currentAudioId}`;

  return {
    form: name,
    key: name,
  };
};

export default compose(
  setPropTypes(propTypes),
  withHandlers(handlers),
  withProps(createProps),
  reduxForm(),
)(CommentBox);
