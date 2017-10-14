import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { graphql } from 'react-relay';
import { fragmentContainer } from 'recompose-relay-modern';

import { fetchNextSongs } from './actions';
import Songs from './component';

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

const fragment = fragmentContainer(graphql`
  fragment songsContainer_songs on Song {
    name
  }`,
);

export default compose(
  fragment,
  connect(mapStateToProps, {
    fetchNextSongs,
  }),
  withHandlers(handlers),
)(Songs);
