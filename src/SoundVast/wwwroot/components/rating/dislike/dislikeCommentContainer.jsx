import { compose, withHandlers } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';
import { graphql } from 'react-relay';

import Dislike from './dislike';
import rateCommentMutation from '../rateCommentMutation';

const fragments = graphql`
  fragment dislikeCommentContainer_comment on Comment {
    id
    commentId
  }
`;

const handlers = {
  onClick: ({ comment }) => () => rateCommentMutation(comment, false),
};

export default compose(
  fragmentContainer(fragments),
  withHandlers(handlers),
)(Dislike);
