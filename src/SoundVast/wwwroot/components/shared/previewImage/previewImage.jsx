import React from 'react';
import PropTypes from 'prop-types';

const PreviewImage = ({ previewUrl, imagePlaceholderUrl }) => (
  <img alt="" src={previewUrl || imagePlaceholderUrl} />
);

PreviewImage.defaultProps = {
  previewUrl: null,
};

PreviewImage.propTypes = {
  previewUrl: PropTypes.string,
  imagePlaceholderUrl: PropTypes.string.isRequired,
};

export default PreviewImage;
