import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import convertImagesToSources from '../shared/utilities/convertImagesToSources';
import styles from './coverImage.less';

const CoverImage = ({ coverImages, imagePlaceholderUrl, className }) => {
  const sources = convertImagesToSources(coverImages);

  return (
    <picture>
      {coverImages ? [
        <img key={1} alt="" src={sources['310x200']} className={classnames(styles.coverImage, className)} />,
      ] : <img alt="" src={imagePlaceholderUrl} className={classnames(styles.coverImage, className)} />}
    </picture>
  );
};

CoverImage.defaultProps = {
  className: null,
  coverImages: null,
  imagePlaceholderUrl: null,
};

CoverImage.propTypes = {
  className: PropTypes.string,
  coverImages: PropTypes.arrayOf(PropTypes.shape({
    dimention: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired),
  imagePlaceholderUrl: PropTypes.string,
};

export default CoverImage;
