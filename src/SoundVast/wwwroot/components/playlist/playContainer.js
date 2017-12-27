import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, setPropTypes, withHandlers } from 'recompose';
import { actions } from 'react-jplaylist';
import { actions as jPlayerActions } from 'react-jplayer';

import { setCurrentPlaylist } from './actions';
import Play from '../audio/play';
import convertFromSong from '../footerPlaylist/convertFromSong';

const mapStateToProps = ({ jPlayers, jPlaylists, playlist }, { id }) => ({
  paused: jPlayers.FooterPlaylist.paused,
  playlist: jPlaylists.FooterPlaylist.playlist,
  isCurrent: playlist.currentPlaylistId === id,
});

const propTypes = {
  id: PropTypes.number.isRequired,
  playlists: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        playlistId: PropTypes.number.isRequired,
        songPlaylists: PropTypes.shape({
          items: PropTypes.arrayOf(PropTypes.shape({
            song: PropTypes.shape({
              coverImageUrl: PropTypes.string.isRequired,
              audioId: PropTypes.number.isRequired,
              name: PropTypes.string.isRequired,
              artist: PropTypes.string,
              free: PropTypes.bool.isRequired,
            }),
          })),
        }),
      }),
    })),
  }).isRequired,
};

const handlers = {
  onClick: ({ dispatch, id, playlists, isCurrent, paused }) => () => {
    if (paused || !isCurrent) {
      const playlist = playlists.edges.find(x => x.node.playlistId === id);
      const footerPlaylist = playlist.node.songPlaylists.items.map(({ song }) =>
        convertFromSong(song));

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
