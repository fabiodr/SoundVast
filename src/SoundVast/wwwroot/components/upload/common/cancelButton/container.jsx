import PropTypes from 'prop-types';
import { compose, withHandlers, setPropTypes } from 'recompose';

import CancelButton from './component';

const propTypes = {
  index: PropTypes.number.isRequired,
};

const handlers = {
  remove: props => () => props.remove(props.index),
};

export default compose(
  setPropTypes(propTypes),
  withHandlers(handlers),
)(CancelButton);
