import React from 'react';
import PropTypes from 'prop-types';

import styles from './rating.less';
import Like from './like/likeContainer';
import Dislike from './dislike/dislikeContainer';

const Rating = ({ likes, dislikes, audioId }) => (
  <div className={styles.rating}>
    <span>percent</span>
    <Like className={styles.like} audioId={audioId} />
    <Dislike className={styles.dislike} audioId={audioId} />
  </div>
);

Rating.propTypes = {
  audioId: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Rating;
