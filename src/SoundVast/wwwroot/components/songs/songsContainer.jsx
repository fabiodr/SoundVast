import React from 'react';
import { compose, withHandlers, withProps } from 'recompose';
import { graphql } from 'react-relay';

import Songs from './songs';
import paginationContainer from '../shared/createPaginationContainer';

const songsToLoad = 30;
const query = graphql`
  query songsContainerQuery(
    $count: Int!
    $cursor: String
  ) {
    ...songsContainer
  }
`;

const fragments = graphql`
  fragment songsContainer on Query {
    songs(
      first: $count,
      after: $cursor,
    ) @connection(key: "songsContainer_songs") {
      edges {
        node {
          audioId,
          name,
          coverImageUrl,
          artist,
          likes,
          dislikes,
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
    ) {
      ...songsContainer,
    }
  `,
  getVariables: (_, { count, cursor }) => ({
    count,
    cursor,
  }),
};

const handlers = {
  // getPlaylist: props => () => props.songs.map(song => ({
  //   id: song.id,
  //   title: song.name,
  //   artist: song.artist,
  //   sources: {
  //     mp3: `${window.location.origin}/song/stream?id=${song.id}`,
  //   },
  //   poster: song.coverImageUrl,
  //   free: song.free,
  // })),
  loadMore: ({ relay }) => () => relay.loadMore(songsToLoad),
};

const createProps = ({ relay, data }) => ({
  hasMore: relay.hasMore(),
  songs: data.songs.edges.map(x => x.node),
});

const enhance = compose(
  paginationContainer(fragments, connectionConfig),
  withHandlers(handlers),
  withProps(createProps),
);

const SongsContainer = enhance(Songs);

export const routeConfig = {
  Component: SongsContainer,
  query,
  render: ({ props }) => props && <SongsContainer data={props} />,
  prepareVariables: () => ({ count: songsToLoad }),
};

export default SongsContainer;
