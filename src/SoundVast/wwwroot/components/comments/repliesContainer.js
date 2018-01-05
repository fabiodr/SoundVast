import { compose, withHandlers, flattenProp, branch, renderNothing, withProps } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'recompose-relay-modern';

import Comments from './comments';

const fragments = graphql`
  fragment repliesContainer on Comment
  @argumentDefinitions(
    count: { type: "Int", defaultValue: 3 }
  ) {
    id
    replies(
      first: $count
      after: $cursor
    ) @connection(key: "repliesContainer_replies") {
      totalCount
      items {
        commentId
        ...commentContainer_comment
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
      node(id: $nodeId) {
        ...repliesContainer
      }
    }
  `,
  getVariables: (props, { count, cursor }) => ({
    count,
    cursor,
    id: props.id,
  }),
};

const handlers = {
  loadAllReplies: ({ relay, replies }) => () => relay.loadMore(replies.totalCount),
};

const createProps = ({ replies }) => ({
  showLoadRepliesButton: replies.totalCount !== replies.items.length,
});

export default compose(
  paginationContainer(fragments, connectionConfig),
  flattenProp('data'),
  withHandlers(handlers),
  withProps(createProps),
  branch(
    ({ replies }) => replies.totalCount === 0,
    renderNothing,
  ),
)(Comments);
