import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import { fetchSongs } from './actions';
import Songs from './component';

const mapStateToProps = ({ music }) => ({
  songs: music.songs,
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

export default compose(
  connect(mapStateToProps, {
    fetchSongs,
  }),
  withHandlers(handlers),
)(Songs);
