import { compose, withHandlers, setPropTypes } from 'recompose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AddToPlaylist from './addToPlaylist';
import { showModal } from '../shared/modal/actions';

const propTypes = {
  songId: PropTypes.number.isRequired,
};

const handlers = {
  onClick: ({ dispatch, songId }) => () => {
    dispatch(showModal('playlist', { songId }));
  },
};

export default compose(
  setPropTypes(propTypes),
  connect(),
  withHandlers(handlers),
)(AddToPlaylist);
