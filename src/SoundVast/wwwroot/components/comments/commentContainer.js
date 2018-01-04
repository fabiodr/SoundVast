import { compose, flattenProp, withProps } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';
import { graphql } from 'react-relay';

import Comment from './comment';

const fragments = graphql`
  fragment commentContainer_comment on Comment {
    commentId
    body
    dateAdded
    likes
    dislikes
    repliesCount
    originalComment {
      id
    }
    user {
      userName
    }
  }
`;

const createProps = ({ dateAdded, originalComment }) => ({
  dateAdded: new Date(dateAdded).toLocaleDateString(),
  isTopLevelComment: !originalComment,
});

export default compose(
  fragmentContainer(fragments),
  flattenProp('comment'),
  withProps(createProps),
)(Comment);
