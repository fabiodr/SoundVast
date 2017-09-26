import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, setPropTypes } from 'recompose';
import { actions } from 'react-jplaylist';
import { actions as jPlayerActions } from 'react-jplayer';

import Audio from './component';
// import { getRatings } from '../../rating/actions';

const propTypes = {
  getPlaylist: PropTypes.func.isRequired,
};

const mapStateToProps = ({ jPlayers, jPlaylists }, { id }) => ({
  paused: jPlayers.FooterPlaylist.paused,
  isCurrent: jPlayers.FooterPlaylist.media.id === id,
  playlist: jPlaylists.FooterPlaylist.playlist,
});

const handlers = {
  playOnClick: props => () => {
    let playlist = props.playlist;
    const jPlaylistId = 'FooterPlaylist';

    if (playlist.length === 0) {
      playlist = props.getPlaylist();

      props.dispatch(actions.setPlaylist('FooterPlaylist', playlist));
    }

    if (props.paused || !props.isCurrent) {
      const index = playlist.findIndex(x => x.id === props.id);

      props.dispatch(actions.play(jPlaylistId, index));
    } else {
      props.dispatch(jPlayerActions.pause(jPlaylistId));
    }
  },
};

// const lifecycleFunctions = {
//   componentDidMount() {
//     this.props.dispatch(getRatings(this.props.id));
//   },
// };

export default compose(
  setPropTypes(propTypes),
  connect(mapStateToProps),
  // lifecycle(lifecycleFunctions),
  withHandlers(handlers),
)(Audio);
