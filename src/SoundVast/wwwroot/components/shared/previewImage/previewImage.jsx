import React from 'react';
import PropTypes from 'prop-types';

const PreviewImage = ({ previewUrl }) => (
  <img alt="" src={previewUrl} />
);

PreviewImage.defaultProps = {
  previewUrl: null,
};

PreviewImage.propTypes = {
  previewUrl: PropTypes.string,
};

export default PreviewImage;
