import React from 'react';
import PropTypes from 'prop-types';

import styles from './component.less';
import LikeIcon from '../../../../../images/ratingControls/like.svg';

const Like = ({ like, likes, width, height }) => (
  <div>
    <LikeIcon className={styles.likeIcon} width={width} height={height} onClick={like} />
    <div className={styles.likes}>
      {likes}
    </div>
  </div>
);

Like.defaultProps = {
  width: 14,
  height: 14,
};

Like.propTypes = {
  likes: PropTypes.number.isRequired,
  like: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Like;
