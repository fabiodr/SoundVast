import React from 'react';
import PropTypes from 'prop-types';

import LikeIcon from '../../icons/like';
import styles from './like.less';

const Like = ({ className, onClick }) => (
  <span className={className} role="button" tabIndex={0} onClick={onClick}>
    <LikeIcon className={styles.likeIcon} />
  </span>
);

Like.defaultProps = {
  className: null,
};

Like.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Like;
