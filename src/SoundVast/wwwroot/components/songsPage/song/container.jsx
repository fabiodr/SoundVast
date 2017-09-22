import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';
import { actions } from 'react-jplaylist';
import { actions as jPlayerActions } from 'react-jplayer';

import Song from './component';
import { getSongRatings } from '../actions';

const mapStateToProps = ({ music, jPlayers, jPlaylists }, { id }) => ({
  songs: music.songs,
  paused: jPlayers.FooterPlaylist.paused,
  isCurrent: jPlayers.FooterPlaylist.media.id === id,
  playlist: jPlaylists.FooterPlaylist.playlist,
});

const handlers = {
  togglePlay: props => () => {
    let playlist = props.playlist;
    const jPlaylistId = 'FooterPlaylist';

    if (playlist.length === 0) {
      playlist = props.songs.map(song => ({
        id: song.id,
        title: song.name,
        artist: song.artist,
        sources: {
          mp3: `${window.location.origin}/song/stream?id=${song.id}`,
        },
        poster: song.coverImageUrl,
        free: song.free,
      }));

      props.dispatch(actions.setPlaylist(jPlaylistId, playlist));
    }

    if (props.paused || !props.isCurrent) {
      const index = playlist.findIndex(x => x.id === props.id);

      props.dispatch(actions.play(jPlaylistId, index));
    } else {
      props.dispatch(jPlayerActions.pause(jPlaylistId));
    }
  },
};

const lifecycleFunctions = {
  componentDidMount() {
    this.props.dispatch(getSongRatings(this.props.id));
  },
};

export default compose(
  connect(mapStateToProps),
  withHandlers(handlers),
  lifecycle(lifecycleFunctions),
)(Song);
