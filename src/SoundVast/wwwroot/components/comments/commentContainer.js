import { compose, flattenProp, withProps } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';
import { graphql } from 'react-relay';

import Comment from './comment';
import getTimeAgo from '../shared/utilities/getTimeAgo';

const fragments = graphql`
  fragment commentContainer_comment on Comment {
    commentId
    body
    dateAdded
    likes
    dislikes
    user {
      userName
    }
  }
`;

const createProps = ({ dateAdded }) => ({
  dateAdded: getTimeAgo(new Date(dateAdded)),
});

export default compose(
  fragmentContainer(fragments),
  flattenProp('comment'),
  withProps(createProps),
)(Comment);
