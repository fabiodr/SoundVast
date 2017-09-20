import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose, withHandlers, setPropTypes } from 'recompose';

import Dislike from './component';
import { rateSong } from '../actions';

const handlers = {
  dislike: props => () => props.dispatch(rateSong(props.songId, false)),
};

const propTypes = {
  songId: PropTypes.number.isRequired,
};

export default compose(
  connect(),
  setPropTypes(propTypes),
  withHandlers(handlers),
)(Dislike);
