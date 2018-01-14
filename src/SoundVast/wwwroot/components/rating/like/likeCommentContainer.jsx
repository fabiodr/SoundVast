import { compose, withHandlers } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';
import { graphql } from 'react-relay';

import Like from './like';
import rateCommentMutation from '../rateCommentMutation';

const fragments = graphql`
  fragment likeCommentContainer_comment on Comment {
    id
    commentId
  }
`;

const handlers = {
  onClick: ({ comment }) => () => rateCommentMutation(comment, true),
};

export default compose(
  fragmentContainer(fragments),
  withHandlers(handlers),
)(Like);
