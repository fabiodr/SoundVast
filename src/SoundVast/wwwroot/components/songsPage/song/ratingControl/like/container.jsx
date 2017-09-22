import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose, withHandlers, setPropTypes } from 'recompose';

import Like from './component';
import { rateSong } from '../../../actions';

const handlers = {
  like: props => () => props.dispatch(rateSong(props.songId, true)),
};

const propTypes = {
  songId: PropTypes.number.isRequired,
};

export default compose(
  connect(),
  setPropTypes(propTypes),
  withHandlers(handlers),
)(Like);
