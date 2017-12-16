import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, withProps, lifecycle } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'recompose-relay-modern';
import { actions } from 'react-jplaylist';

import Songs from './songs';
import { audiosToLoad } from '../audio/utilities';

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
          artist
          coverImageUrl
          free
          ...songContainer_song
        }
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

const createProps = ({ relay, data }) => ({
  hasMore: relay.hasMore(),
  mappedPlaylist: data.songs.edges.map(({ node }) => ({
    id: node.audioId,
    title: node.name,
    artist: node.artist,
    sources: {
      mp3: `${window.location.origin}/song/stream?id=${node.audioId}`,
    },
    poster: node.coverImageUrl,
    free: node.free,
  })),
});

const enhance = compose(
  connect(null, {
    setPlaylist: actions.setPlaylist,
  }),
  paginationContainer(fragments, connectionConfig),
  withHandlers(handlers),
  withProps(createProps),
  lifecycle({
    componentDidMount() {
      this.props.setPlaylist('FooterPlaylist', this.props.mappedPlaylist);
    },
    componentWillReceiveProps(nextProps) {
      this.props.setPlaylist('FooterPlaylist', nextProps.mappedPlaylist);
    },
  }),
);

const SongsContainer = enhance(Songs);

export const routeConfig = {
  Component: SongsContainer,
  query,
  render: ({ props }) => props && <SongsContainer data={props} />,
  prepareVariables: ({ genre }, { location }) => ({
    count: audiosToLoad,
    genre,
    filter: {
      newest: location.query.newest,
      topRatedDays: location.query.topRatedDays,
      mostCommentedDays: location.query.mostCommentedDays,
      mostPlayedDays: location.query.mostPlayedDays,
    },
  }),
};

export default SongsContainer;
