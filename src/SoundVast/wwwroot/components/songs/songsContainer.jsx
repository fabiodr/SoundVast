import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, flattenProp } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'recompose-relay-modern';
import { actions } from 'react-jplaylist';

import Songs from './songs';
import { audiosToLoad } from '../shared/utilities/itemsToLoad';
import getFilterVariables from '../shared/utilities/getFilterVariables';

const query = graphql`
  query songsContainerQuery(
    $count: Int!
    $cursor: String
    $genre: String
    $filter: FilterInput
    $originalCommentId: Int
  ) {
    ...songsContainer
  }
`;

const fragments = graphql`
  fragment songsContainer on Query {
    songs(
      first: $count
      after: $cursor
      genre: $genre
      filter: $filter
    ) @connection(key: "songsContainer_songs") {
      edges {
        cursor
        node {
          audioId
          name
          artists {
            name
          }
          coverImageUrl
          free
          ...songContainer_song
          ...commentsContainer
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
    query songsContainerForwardQuery(
      $count: Int!
      $cursor: String
      $genre: String
      $filter: FilterInput
      $originalCommentId: Int
    ) {
      ...songsContainer
    }
  `,
  getVariables: (_, { count, cursor }, fragmentVariables) => ({
    count,
    cursor,
    filter: fragmentVariables.filter,
  }),
};

const handlers = {
  loadMore: ({ relay }) => () => relay.loadMore(audiosToLoad),
};

const enhance = compose(
  connect(null, {
    setPlaylist: actions.setPlaylist,
  }),
  paginationContainer(fragments, connectionConfig),
  flattenProp('data'),
  withHandlers(handlers),
);

const SongsContainer = enhance(Songs);

export const routeConfig = {
  Component: SongsContainer,
  query,
  render: ({ props }) => props && <SongsContainer data={props} />,
  prepareVariables: ({ genre }, { location }) => ({
    count: audiosToLoad,
    genre,
    filter: getFilterVariables(location),
  }),
};

export default SongsContainer;
