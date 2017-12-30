import React from 'react';
import PropTypes from 'prop-types';

const ImageOption = ({
  onMouseDown,
  onMouseEnter,
  onMouseMove,
  option,
  children,
}) => (
  <div
    role="button"
    tabIndex={0}
    onMouseDown={onMouseDown}
    onMouseEnter={onMouseEnter}
    onMouseMove={onMouseMove}
  >
    {option.imageOptionUrl && <img alt="" src={option.imageOptionUrl} />}
    {children}
  </div>
);

ImageOption.propTypes = {
  onMouseDown: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired,
  option: PropTypes.shape({
    imageOptionUrl: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default ImageOption;
