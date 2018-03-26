import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, setPropTypes } from 'recompose';
import { actions } from 'react-jplaylist';
import { actions as jPlayerActions } from 'react-jplayer';

import Play from './play';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  paused: jPlayers.FooterPlaylist.paused,
  isCurrent: jPlayers.FooterPlaylist.media.id === id,
});

const handlers = {
  onClick: ({ dispatch, isCurrent, paused, footerPlaylist, id }) => () => {
    if (paused || !isCurrent) {
      const index = footerPlaylist.findIndex(x => x.id === id);

      dispatch(actions.setPlaylist('FooterPlaylist', footerPlaylist));
      dispatch(actions.play('FooterPlaylist', index));
    } else {
      dispatch(jPlayerActions.pause('FooterPlaylist'));
    }
  },
};

const propTypes = {
  id: PropTypes.number.isRequired,
  footerPlaylist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string,
      sources: PropTypes.shape({
        mp3: PropTypes.arrayOf(
          PropTypes.shape({
            src: PropTypes.string.isRequired,
          }).isRequired,
        ).isRequired,
      }),
      poster: PropTypes.string,
    }),
  ).isRequired,
};

export default compose(
  setPropTypes(propTypes),
  connect(mapStateToProps),
  withHandlers(handlers),
)(Play);
