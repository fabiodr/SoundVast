import { compose, withHandlers } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'relay-modern-hoc';

import Comments from './comments';

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
          date
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
    relay.refetchConnection(30, null, {
      originalCommentId: id,
    });
  },
};

export default compose(
  paginationContainer(fragments, connectionConfig),
  withHandlers(handlers),
)(Comments);
