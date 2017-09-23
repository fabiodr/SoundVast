import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose, withHandlers, setPropTypes } from 'recompose';

import Like from '../../../../shared/audios/audio/ratingControl/like/component';
import { rateSong } from '../../../actions';

const mapStateToProps = ({ music }, { index }) => ({
  likes: music.songs[index].ratings.filter(x => music.ratings[x].liked).length,
});

const handlers = {
  like: props => () => props.dispatch(rateSong(props.songId, true)),
};

const propTypes = {
  index: PropTypes.number.isRequired,
  songId: PropTypes.number.isRequired,
};

export default compose(
  setPropTypes(propTypes),
  connect(mapStateToProps),
  withHandlers(handlers),
)(Like);
