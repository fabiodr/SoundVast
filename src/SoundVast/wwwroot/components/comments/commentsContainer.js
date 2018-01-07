import { compose, withHandlers } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'recompose-relay-modern';

import Comments from './comments';
import { commentsToLoad } from '../shared/utilities/itemsToLoad';

const fragments = graphql`
  fragment commentsContainer_audio on Audio {
    id
    ...commentBoxContainer_audio
    ...replyBoxContainer_audio
    comments(
      first: $count
      after: $cursor
    ) @connection(key: "commentsContainer_comments") {
      edges {
        node {
          commentId
          id
          ...commentContainer_comment
          ...repliesContainer_comment
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
      $id: ID!
      $count: Int!
      $cursor: String
    ) {
      node(id: $id) {
        ...commentsContainer_audio
      }
    }
  `,
  getVariables: (props, { count, cursor }) => ({
    count,
    cursor,
    id: props.audio.id,
  }),
};

const handlers = {
  loadMore: ({ relay }) => () => relay.loadMore(commentsToLoad),
};

export default compose(
  paginationContainer(fragments, connectionConfig),
  withHandlers(handlers),
)(Comments);
