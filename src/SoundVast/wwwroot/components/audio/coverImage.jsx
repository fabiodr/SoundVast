import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './coverImage.less';

const CoverImage = ({ coverImageUrl, imagePlaceholderUrl, className, name }) => (
  coverImageUrl ? (
    <img alt={name} src={`${coverImageUrl}_310x200.jpg`} className={classnames(styles.coverImage, className)} />
  ) : <img alt={name} src={imagePlaceholderUrl} className={classnames(styles.coverImage, className)} />
);

CoverImage.defaultProps = {
  className: null,
  coverImageUrl: null,
  imagePlaceholderUrl: null,
};

CoverImage.propTypes = {
  className: PropTypes.string,
  coverImageUrl: PropTypes.string,
  imagePlaceholderUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default CoverImage;
