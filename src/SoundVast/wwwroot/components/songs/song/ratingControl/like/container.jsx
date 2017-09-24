import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose, withHandlers, setPropTypes } from 'recompose';

import Like from '../../../../shared/audios/audio/ratingControl/like/component';
import { rateSong } from '../../../actions';

const mapStateToProps = ({ music }, { songId }) => ({
  likes: Object.values(music.ratings).filter(x => x.audioId === songId && x.liked).length,
});

const handlers = {
  like: props => () => props.dispatch(rateSong(props.songId, true)),
};

const propTypes = {
  songId: PropTypes.number.isRequired,
};

export default compose(
  setPropTypes(propTypes),
  connect(mapStateToProps),
  withHandlers(handlers),
)(Like);
