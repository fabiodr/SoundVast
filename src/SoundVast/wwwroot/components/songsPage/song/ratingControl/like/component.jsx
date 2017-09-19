import React from 'react';
import PropTypes from 'prop-types';

import styles from './component.less';
import LikeIcon from '../../../../../images/ratingControls/like.svg';

const Like = ({ like, width, height }) => (
  <LikeIcon className={styles.like} width={width} height={height} onClick={like} />
);

Like.defaultProps = {
  width: 14,
  height: 14,
};

Like.propTypes = {
  like: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Like;
