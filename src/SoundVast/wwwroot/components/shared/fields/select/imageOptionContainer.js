import PropTypes from 'prop-types';
import { compose, withHandlers, setPropTypes } from 'recompose';

import ImageOption from './imageOption';

const propTypes = {
  onSelect: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  isFocused: PropTypes.bool.isRequired,
  option: PropTypes.object.isRequired,
};

const handlers = {
  onMouseDown: ({ onSelect, option }) => (event) => {
    event.preventDefault();
    event.stopPropagation();

    onSelect(option, event);
  },
  onMouseEnter: ({ onFocus, option }) => event => onFocus(option, event),
  onMouseMove: ({ isFocused, onFocus, option }) => (event) => {
    if (isFocused) return;

    onFocus(option, event);
  },
};

export default compose(
  setPropTypes(propTypes),
  withHandlers(handlers),
)(ImageOption);
