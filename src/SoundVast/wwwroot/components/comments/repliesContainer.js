import { compose, flattenProp, withStateHandlers } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'recompose-relay-modern';

import Replies from './replies';

const fragments = graphql`
  fragment repliesContainer_comment on Comment
  @argumentDefinitions(
    count: { type: "Int", defaultValue: 0 }
  ) {
    commentId
    id
    replies(
      first: $count
      after: $cursor
    ) @connection(key: "repliesContainer_replies") {
      totalCount
      edges {
        cursor
        node {
          commentId
          ...commentContainer_comment
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

const connectionConfig = {
  direction: 'forward',
  query: graphql`
    query repliesContainerForwardQuery(
      $id: ID!
      $count: Int!
      $cursor: String
    ) {
      node(id: $id) {
        ...repliesContainer_comment @arguments(count: $count)
      }
    }
  `,
  getVariables: (props, { count, cursor }) => ({
    count,
    cursor,
    id: props.comment.id,
  }),
};

export default compose(
  paginationContainer(fragments, connectionConfig),
  flattenProp('comment'),
  withStateHandlers({ showReplies: false }, {
    toggleReplies: ({ showReplies }, { relay, replies }) => () => {
      relay.refetchConnection(!showReplies ? replies.totalCount : 0);

      return {
        showReplies: !showReplies,
      };
    },
  }),
)(Replies);
