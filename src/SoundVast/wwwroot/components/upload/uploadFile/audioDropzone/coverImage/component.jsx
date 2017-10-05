import React from 'react';
import PropTypes from 'prop-types';

const CoverImage = ({ coverImageFile }) => (
  <figure>
    <img alt="" src={coverImageFile.preview} />
    <figcaption>{coverImageFile.title}</figcaption>
  </figure>
);

CoverImage.defaultProps = {
  coverImageFile: {
    preview: null,
    title: null,
  },
};

CoverImage.propTypes = {
  coverImageFile: PropTypes.shape({
    preview: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default CoverImage;
