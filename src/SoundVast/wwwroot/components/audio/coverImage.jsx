import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './coverImage.less';

const CoverImage = ({ coverImageUrl, className }) => (
  <img alt="" src={coverImageUrl} className={classnames(styles.coverImage, className)} />
);

CoverImage.defaultProps = {
  className: null,
};

CoverImage.propTypes = {
  className: PropTypes.string,
  coverImageUrl: PropTypes.string.isRequired,
};

export default CoverImage;
