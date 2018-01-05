import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { compose, withHandlers, setPropTypes } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';
import { graphql } from 'react-relay';

import CommentBox from './commentBox';
import commentMutation from './commentMutation';

const fragments = graphql`
  fragment commentBoxContainer_audio on Audio {
    id
    audioId
    name
  }
`;

const propTypes = {
  originalCommentId: PropTypes.number,
};

const handlers = {
  onSubmit: ({ audio, originalCommentId }) => (input) => {
    commentMutation(input, audio, originalCommentId);
  },
};

export default compose(
  fragmentContainer(fragments),
  setPropTypes(propTypes),
  withHandlers(handlers),
  reduxForm(),
)(CommentBox);
