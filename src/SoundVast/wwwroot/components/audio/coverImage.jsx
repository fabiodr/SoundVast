import React from 'react';
import PropTypes from 'prop-types';

import styles from './CoverImage.less';

const CoverImage = ({ coverImageUrl }) => (
  <img alt="" src={coverImageUrl} className={styles.coverImage} />
);

CoverImage.propTypes = {
  coverImageUrl: PropTypes.string.isRequired,
};

export default CoverImage;
