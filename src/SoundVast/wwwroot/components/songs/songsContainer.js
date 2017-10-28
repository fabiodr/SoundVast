import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import { graphql, createPaginationContainer } from 'react-relay';
import { fragmentContainer } from 'recompose-relay-modern';

import { fetchNextSongs } from './actions';
import Songs from './songs';
import paginationContainer from './createPaginationContainer';

export const query = graphql`
  query songsContainerQuery(
    $first: Int!
    $after: String
  ) {
    ...songsContainer_songs
  }
`;

const fragments = graphql`
fragment songsContainer_songs on AppQuery {
  songs(
    first: $first,
    after: $after,
  ) @connection(key: "songsContainer_songs") {
    edges {
      node {
        songId,
        name,
        coverImageUrl,
        artist,
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}`;

const connectionConfig = {
  direction: 'forward',
  query: graphql`
    query songsContainerForwardQuery(
      $first: Int!
      $after: String
    ) {
      ...songsContainer_songs
    }
  `,
  getConnectionFromProps: props => props.songs && props.songs.songs,
  getFragmentVariables: (previousVariables, first) => ({
    ...previousVariables,
    first,
  }),
  getVariables: (props, paginationInfo) => ({
    first: paginationInfo.first,
    after: paginationInfo.cursor,
  }),
};

const mapStateToProps = ({ music }) => ({
  hasMore: music.hasMore,
});

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
  loadMore: ({ relay }) => () => {
    if (relay.isLoading()) {
      return;
    }

    relay.loadMore(2);
  },
};

const createProps = ({ relay }) => ({
  hasMore: relay.hasMore(),
});

const enhance = compose(
  paginationContainer(fragments, connectionConfig),
  connect(mapStateToProps),
  withHandlers(handlers),
  withProps(createProps),
);

export default enhance(Songs);
