import { connect } from 'react-redux';
import { actions } from 'react-jplaylist';
import { actions as jPlayerActions } from 'react-jplayer';

import Play from './play';

const mapStateToProps = ({ jPlayers, jPlaylists }, { id }) => ({
  paused: jPlayers.FooterPlaylist.paused,
  isCurrent: jPlayers.FooterPlaylist.media.id === id,
  playlist: jPlaylists.FooterPlaylist.playlist,
});

export default connect(mapStateToProps, {
  play: actions.play,
  pause: jPlayerActions.pause,
})(Play);
