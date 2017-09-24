import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose, withHandlers, setPropTypes } from 'recompose';

import Dislike from '../../../../shared/audios/audio/ratingControl/dislike/component';
import { rateSong } from '../../../actions';

const mapStateToProps = ({ music }, { songId }) => ({
  dislikes: Object.values(music.ratings).filter(x => x.audioId === songId && !x.liked).length,
});

const handlers = {
  dislike: props => () => props.dispatch(rateSong(props.songId, false)),
};

const propTypes = {
  songId: PropTypes.number.isRequired,
};

export default compose(
  connect(mapStateToProps),
  setPropTypes(propTypes),
  withHandlers(handlers),
)(Dislike);
