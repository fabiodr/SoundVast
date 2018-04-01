import React from 'react';
import { compose, withHandlers, flattenProp, lifecycle } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'recompose-relay-modern';
import { connect } from 'react-redux';
import { actions } from 'react-jplaylist';

import Radios from './radios';
import { audiosToLoad } from '../shared/utilities/itemsToLoad';
import getAudioVariables from '../shared/utilities/getAudioVariables';
import convertRadioToMedia from '../shared/utilities/convertRadioToMedia';

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
          audioId
          ...radioContainer_liveStream
          ...sideBarContainer_audios
        }
      }
      items {
        audioId
        name
        streamDatas {
          liveStreamUrl
        }
        coverImageUrl
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

const handlersFactory = () => {
  let shouldLoadMore = true;

  return {
    loadMore: ({ relay }) => () => {
      if (shouldLoadMore) {
        shouldLoadMore = false;
        relay.loadMore(audiosToLoad, () => {
          shouldLoadMore = true;
        });
      }
    },
  };
};

const enhance = compose(
  connect(null, {
    add: actions.add,
    setPlaylist: actions.setPlaylist,
  }),
  paginationContainer(fragments, connectionConfig),
  flattenProp('data'),
  withHandlers(handlersFactory),
  lifecycle({
    componentDidMount() {
      const playlist = this.props.liveStreams.items.map(item => convertRadioToMedia(item));

      this.props.setPlaylist('FooterPlaylist', playlist);
    },
    componentDidUpdate(prevProps) {
      if (this.props.liveStreams.items !== prevProps.liveStreams.items) {
        this.props.liveStreams.items.forEach(item => this.props.add('FooterPlaylist', convertRadioToMedia(item)));
      }
    },
  }),
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
