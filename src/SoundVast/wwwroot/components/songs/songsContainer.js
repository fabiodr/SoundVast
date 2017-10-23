import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { graphql } from 'react-relay';
import { fragmentContainer } from 'recompose-relay-modern';

import { fetchNextSongs } from './actions';
import Songs from './songs';

const fragment = graphql`
fragment songsContainer_songs on Song @relay(plural: true) {
  id,
  name
  coverImageUrl,
  artist,
}`;

const mapStateToProps = ({ music }) => ({
  // songs: music.songs,
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
};

export const query = graphql`
  query songsContainerQuery {
    songs {
      ...songsContainer_songs
    }
  }
`;

const enhance = compose(
  fragmentContainer(fragment),
  connect(mapStateToProps, {
    fetchNextSongs,
  }),
  withHandlers(handlers),
);

export default enhance(Songs);
