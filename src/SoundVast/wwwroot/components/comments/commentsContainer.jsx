import { compose, withHandlers } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'recompose-relay-modern';

import Comments from './comments';
import { commentsToLoad } from '../shared/utilities/itemsToLoad';

const fragments = graphql`
  fragment commentsContainer on Audio {
    audioId,
    comments(
      first: $count
      after: $cursor
      originalCommentId: $originalCommentId
    ) @connection(key: "commentsContainer_comments") {
      edges {
        node {
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
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

const connectionConfig = {
  direction: 'forward',
  query: graphql`
    query commentsContainerForwardQuery(
      $id: Int!
      $count: Int!
      $cursor: String
      $originalCommentId: Int
    ) {
      song(id: $id) {
        ...commentsContainer
      }
    }
  `,
  getVariables: (props, { count, cursor }) => ({
    count,
    cursor,
    id: props.data.audioId,
  }),
};

const handlers = {
  setReplies: ({ relay }) => (id) => {
    relay.refetchConnection(commentsToLoad, null, {
      originalCommentId: id,
    });
  },
  loadMore: ({ relay }) => () => relay.loadMore(commentsToLoad),
};

export default compose(
  paginationContainer(fragments, connectionConfig),
  withHandlers(handlers),
)(Comments);
