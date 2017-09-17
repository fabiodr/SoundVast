import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { actions } from 'react-jplaylist';
import { actions as jPlayerActions } from 'react-jplayer';

import Song from './component';

const mapStateToProps = ({ jPlayers, jPlaylists }, { id }) => ({
  paused: jPlayers.FooterPlaylist.paused,
  isCurrent: jPlayers.FooterPlaylist.media.id === id,
  index: jPlaylists.FooterPlaylist.playlist.findIndex(x => x.id === id),
});

const handlers = {
  togglePlay: props => () => {
    const id = 'FooterPlaylist';

    if (props.paused || !props.isCurrent) {
      props.dispatch(actions.play(id, props.index));
    } else {
      props.dispatch(jPlayerActions.pause(id));
    }
  },
};

export default compose(
  connect(mapStateToProps),
  withHandlers(handlers),
)(Song);
