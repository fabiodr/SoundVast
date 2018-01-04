import { reduxForm } from 'redux-form';
import { compose, withHandlers, withProps } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';
import { graphql } from 'react-relay';

import CommentBox from './commentBox';
import commentMutation from './commentMutation';

const fragments = graphql`
  fragment commentBoxContainer_audio on Audio {
    id
    audioId
    name
    comments(
      first: $count
      after: $cursor
      originalCommentId: $originalCommentId
    ) {
      items {
        commentId
      }
    }
  }
`;

const handlers = {
  onSubmit: ({ audio }) => (input) => {
    commentMutation(input, audio);
  },
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
  fragmentContainer(fragments),
  withHandlers(handlers),
  withProps(createProps),
  reduxForm(),
)(CommentBox);
