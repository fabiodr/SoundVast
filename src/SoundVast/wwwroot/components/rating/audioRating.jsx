import React from 'react';
import PropTypes from 'prop-types';

import styles from './audioRating.less';

const Rating = ({ like, dislike, likes, dislikes }) => (
  <div className={styles.rating}>
    <div className={styles.likeContainer}>
      {like}
      <span>{likes}</span>
    </div>
    <div className={styles.dislikeContainer}>
      {dislike}
      <span>{dislikes}</span>
    </div>
  </div>
);

Rating.propTypes = {
  like: PropTypes.element.isRequired,
  dislike: PropTypes.element.isRequired,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
};

export default Rating;
