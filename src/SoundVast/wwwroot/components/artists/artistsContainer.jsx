import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, flattenProp } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'recompose-relay-modern';
import { actions } from 'react-jplaylist';

import Artists from './artists';
import { audiosToLoad } from '../shared/utilities/itemsToLoad';
import getFilterVariables from '../shared/utilities/getFilterVariables';

const query = graphql`
  query artistsContainerQuery(
    $count: Int!
    $cursor: String
    $genre: String
    $filter: FilterInput
    $originalCommentId: Int
  ) {
    ...artistsContainer
  }
`;

const fragments = graphql`
  fragment artistsContainer on Query {
    artists(
      first: $count
      after: $cursor
      genre: $genre
      filter: $filter
    ) @connection(key: "artistsContainer_artists") {
      edges {
        cursor
        node {
          ...artistContainer_artist
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
    query artistsContainerForwardQuery(
      $count: Int!
      $cursor: String
      $genre: String
      $filter: FilterInput
      $originalCommentId: Int
    ) {
      ...artistsContainer
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

const ArtistsContainer = enhance(Artists);

export const routeConfig = {
  Component: ArtistsContainer,
  query,
  render: ({ props }) => props && <ArtistsContainer data={props} />,
  prepareVariables: ({ genre }, { location }) => ({
    count: audiosToLoad,
    genre,
    filter: getFilterVariables(location),
  }),
};

export default ArtistsContainer;
