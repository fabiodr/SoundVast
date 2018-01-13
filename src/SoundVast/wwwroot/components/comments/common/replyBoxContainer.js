import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { compose, withHandlers, setPropTypes, withStateHandlers, branch, renderComponent, withProps } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';
import { graphql } from 'react-relay';

import ReplyBox from './replyBox';
import replyMutation from '../replyMutation';
import ReplyButton from './replyButton';

const fragments = graphql`
  fragment replyBoxContainer_audio on Audio {
    id
    audioId
    name
  }
`;

const propTypes = {
  audio: PropTypes.object.isRequired,
  rootComment: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  originalComment: PropTypes.shape({
    commentId: PropTypes.number.isRequired,
  }).isRequired,
};

const handlers = {
  onSubmit: ({ audio, rootComment, originalComment }) => (input) => {
    replyMutation(input, audio, rootComment, originalComment);
  },
};

export default compose(
  fragmentContainer(fragments),
  setPropTypes(propTypes),
  withStateHandlers({
    showReplyBox: false,
  }, {
    reply: () => () => ({
      showReplyBox: true,
    }),
    cancel: () => () => ({
      showReplyBox: false,
    }),
  }),
  branch(
    ({ showReplyBox }) => !showReplyBox,
    renderComponent(ReplyButton),
  ),
  withHandlers(handlers),
  withProps(({ reply }) => ({ form: `replyBox_${reply.commentId}` })),
  reduxForm(),
)(ReplyBox);
