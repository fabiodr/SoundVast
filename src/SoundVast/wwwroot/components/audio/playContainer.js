import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, setPropTypes } from 'recompose';
import { actions } from 'react-jplaylist';
import { actions as jPlayerActions } from 'react-jplayer';

import Play from './play';

const mapStateToProps = ({ jPlayers, jPlaylists }, { id }) => ({
  paused: jPlayers.FooterPlaylist.paused,
  isCurrent: jPlayers.FooterPlaylist.media.id === id,
  playlist: jPlaylists.FooterPlaylist.playlist,
});

const handlers = {
  onClick: ({ dispatch, isCurrent, paused, playlist, id }) => () => {
    if (paused || !isCurrent) {
      const index = playlist.findIndex(x => x.id === id);

      dispatch(actions.play('FooterPlaylist', index));
    } else {
      dispatch(jPlayerActions.pause('FooterPlaylist'));
    }
  },
};

const propTypes = {
  id: PropTypes.number.isRequired,
};

export default compose(
  setPropTypes(propTypes),
  connect(mapStateToProps),
  withHandlers(handlers),
)(Play);
