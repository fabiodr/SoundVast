import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose, withHandlers, setPropTypes } from 'recompose';

import Dislike from './component';
import { rateSong } from '../../../actions';

const mapStateToProps = ({ music }, { index }) => ({
  dislikes: music.songs[index].ratings.filter(x => !music.ratings[x].liked).length,
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
