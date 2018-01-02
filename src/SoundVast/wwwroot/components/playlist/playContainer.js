import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, setPropTypes, withHandlers } from 'recompose';
import { actions } from 'react-jplaylist';
import { actions as jPlayerActions } from 'react-jplayer';

import { setCurrentPlaylist } from './actions';
import Play from '../audio/play';

const mapStateToProps = ({ jPlayers, jPlaylists, playlist }, { id }) => ({
  paused: jPlayers.FooterPlaylist.paused,
  playlist: jPlaylists.FooterPlaylist.playlist,
  isCurrent: playlist.currentPlaylistId === id,
});

const propTypes = {
  id: PropTypes.number.isRequired,
  getCurrentPlaylist: PropTypes.func.isRequired,
};

const handlers = {
  onClick: ({ dispatch, id, getCurrentPlaylist, isCurrent, paused }) => () => {
    if (paused || !isCurrent) {
      const footerPlaylist = getCurrentPlaylist(id);

      dispatch(actions.setPlaylist('FooterPlaylist', footerPlaylist));
      dispatch(actions.play('FooterPlaylist'));
      dispatch(setCurrentPlaylist(id));
    } else {
      dispatch(jPlayerActions.pause('FooterPlaylist'));
    }
  },
};

export default compose(
  setPropTypes(propTypes),
  connect(mapStateToProps),
  withHandlers(handlers),
)(Play);
