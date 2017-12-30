import React from 'react';
import { compose, withHandlers, flattenProp } from 'recompose';
import { paginationContainer } from 'recompose-relay-modern';
import { graphql } from 'react-relay';

import SongPendingEdit from './songPendingEdit';

const query = graphql`
  query songPendingEditContainerQuery(
    $count: Int!
    $cursor: String
  ) {
    ...songPendingEditContainer
  }
`;

const fragments = graphql`
  fragment songPendingEditContainer on Query {
    songsPendingEdit(
      first: $count
      after: $cursor
    ) @connection(key: "songPendingEditContainer_songsPendingEdit") {
      edges {
        cursor
        node {
          audioPendingEditId
          name
          coverImageUrl
          free
          contributor {
            userName
          }
          genre {
            name
          }
          audio {
            name
            coverImageUrl
            free
            genre {
              name
            }
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
    query songPendingEditContainerForwardQuery(
      $count: Int!
      $cursor: String
    ) {
      ...songPendingEditContainer
    }
  `,
  getVariables: (_, { count, cursor }) => ({
    count,
    cursor,
  }),
};

const handlers = {
  loadMore: ({ relay }) => () => relay.loadMore(1),
};

const SongPendingEditContainer = compose(
  paginationContainer(fragments, connectionConfig),
  flattenProp('data'),
  withHandlers(handlers),
)(SongPendingEdit);

export const routeConfig = {
  Component: SongPendingEditContainer,
  query,
  render: ({ props }) => props && <SongPendingEditContainer data={props} />,
  prepareVariables: () => ({
    count: 1,
  }),
};

export default SongPendingEditContainer;
