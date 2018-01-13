import { compose, flattenProp } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';
import { graphql } from 'react-relay';

import Comment from './comment';

const fragments = graphql`
  fragment commentContainer_comment on Comment {
    id
    commentId
    body
    dateAdded
    likes
    dislikes
    user {
      userName
    }
    ...repliesContainer_comment
  }
`;

export default compose(
  fragmentContainer(fragments),
  flattenProp('comment'),
)(Comment);
