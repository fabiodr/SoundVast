import PropTypes from 'prop-types';
import { compose, withHandlers, setPropTypes } from 'recompose';

import CancelButton from './component';

const propTypes = {
  id: PropTypes.string.isRequired,
};

const handlers = {
  remove: props => () => props.remove(props.id),
};

export default compose(
  setPropTypes(propTypes),
  withHandlers(handlers),
)(CancelButton);
