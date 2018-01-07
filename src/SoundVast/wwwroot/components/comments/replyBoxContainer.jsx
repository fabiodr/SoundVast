import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { compose, withHandlers, setPropTypes, withStateHandlers, branch, renderComponent, withProps } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';
import { graphql } from 'react-relay';

import CommentBox from './commentBox';
import replyMutation from './replyMutation';
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
  comment: PropTypes.shape({
    commentId: PropTypes.number.isRequired,
  }).isRequired,
};

const handlers = {
  onSubmit: ({ audio, rootComment, comment }) => (input) => {
    replyMutation(input, audio, rootComment, comment);
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
  withProps(({ comment }) => ({ form: `replyBox_${comment.commentId}` })),
  reduxForm(),
)(props => (
  <CommentBox
    {...props}
    bodyPlaceholder="Add your reply..."
    saveCommentText="Reply"
  />
));
