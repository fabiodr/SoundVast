import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, flattenProp } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'recompose-relay-modern';
import { actions } from 'react-jplaylist';

import Radios from './radios';
import { audiosToLoad } from '../shared/utilities/itemsToLoad';
import getAudioVariables from '../shared/utilities/getAudioVariables';

const query = graphql`
  query radiosContainerQuery(
    $count: Int!
    $cursor: String
    $genre: String
    $searchQuery: String
    $filter: FilterInput
  ) {
    ...radiosContainer
  }
`;

const fragments = graphql`
  fragment radiosContainer on Query {
    liveStreams(
      first: $count
      after: $cursor
      genre: $genre
      searchQuery: $searchQuery
      filter: $filter
    ) @connection(key: "radiosContainer_liveStreams") {
      edges {
        cursor
        node {
          id
          audioId
          name
          coverImageUrl
          liveStreamUrl
          ...radioContainer_liveStream
          ...sideBarContainer_audios
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
    query radiosContainerForwardQuery(
      $count: Int!
      $cursor: String
      $genre: String
      $searchQuery: String
      $filter: FilterInput
    ) {
      ...radiosContainer
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

const RadiosContainer = enhance(Radios);

export const routeConfig = {
  Component: RadiosContainer,
  query,
  render: ({ props }) => props && <RadiosContainer data={props} />,
  prepareVariables: (_, { location }) => ({
    count: audiosToLoad,
    ...getAudioVariables(location),
  }),
};

export default RadiosContainer;
