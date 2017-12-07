import { compose, withHandlers } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'relay-modern-hoc';

import Comments from './comments';

const fragments = graphql`
  fragment commentsContainer on Audio {
    comments(
      first: $count
      after: $cursor
      getReplies: $getReplies
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

const handlers = {
  showReplies: ({ relay }) => () => {debugger
    // eslint-disable-next-line no-console
    relay.refetchConnection(10, error => console.error(error), {
      getReplies: true,
    });
  },
};

export default compose(
  paginationContainer(fragments),
  withHandlers(handlers),
)(Comments);
