import React from 'react';
import PropTypes from 'prop-types';

const ImageValue = ({
  value,
  children,
}) => (
  <div className="Select-value">
    <span className="Select-value-label">
      {value.imageOptionUrl && <img alt="" src={value.imageOptionUrl} />}
      {children}
    </span>
  </div>
);

ImageValue.propTypes = {
  value: PropTypes.shape({
    imageOptionUrl: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default ImageValue;
