import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, setPropTypes } from 'recompose';

import Dislike from '../../../rating/dislike/dislike';
import { rateSong } from '../../actions';

const mapStateToProps = ({ music }, { id }) => ({
  // dislikes: Object.keys(music.ratings).filter(key => music.ratings[key].audioId === id &&
  //   !music.ratings[key].liked).length,
});

const handlers = {
  dislike: props => () => props.dispatch(rateSong(props.id, false)),
};

const propTypes = {
  id: PropTypes.string.isRequired,
};

export default compose(
  setPropTypes(propTypes),
  connect(mapStateToProps),
  withHandlers(handlers),
)(Dislike);
