import React from 'react';
import PropTypes from 'prop-types';

import LikeIcon from '../../icons/like';
import styles from './like.less';

const Like = ({ onClick, likes }) => (
  <div>
    <span role="button" tabIndex={0} onClick={onClick}>
      <LikeIcon className={styles.likeIcon} />
    </span>
    <div className="likes">
      {likes}
    </div>
  </div>
);

Like.propTypes = {
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Like;
