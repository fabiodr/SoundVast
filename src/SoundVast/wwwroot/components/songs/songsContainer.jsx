import React from 'react';
import { compose, withHandlers, withProps } from 'recompose';
import { graphql } from 'react-relay';

import Songs from './songs';
import paginationContainer from './createPaginationContainer';

const songsToLoad = 20;
const query = graphql`
  query songsContainerQuery(
    $count: Int!
    $cursor: String
  ) {
    ...songsContainer
  }
`;

const fragments = graphql`
fragment songsContainer on AppQuery {
  songs(
    first: $count,
    after: $cursor,
  ) @connection(key: "songsContainer_songs") {
    edges {
      node {
        songId,
        name,
        coverImageUrl,
        artist,
      }
    }
  }
}`;

const connectionConfig = {
  direction: 'forward',
  query: graphql`
    query songsContainerForwardQuery(
      $count: Int!
      $cursor: String
    ) {
      ...songsContainer
    }
  `,
  getVariables: (_, { count, cursor }) => ({
    count,
    cursor,
  }),
};

const handlers = {
  getPlaylist: props => () => props.songs.map(song => ({
    id: song.id,
    title: song.name,
    artist: song.artist,
    sources: {
      mp3: `${window.location.origin}/song/stream?id=${song.id}`,
    },
    poster: song.coverImageUrl,
    free: song.free,
  })),
  loadMore: ({ relay }) => () => relay.loadMore(songsToLoad),
};

const createProps = ({ relay }) => ({
  hasMore: relay.hasMore(),
});

const enhance = compose(
  paginationContainer(fragments, connectionConfig),
  withHandlers(handlers),
  withProps(createProps),
);

const songsContainer = enhance(Songs);

export const routeConfig = {
  path: '/',
  Component: songsContainer,
  query,
  render: ({ Component, props }) => props && <Component data={props} />,
  prepareVariables: () => ({ count: songsToLoad }),
};

export default songsContainer;
