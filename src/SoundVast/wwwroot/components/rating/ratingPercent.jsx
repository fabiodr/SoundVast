import React from 'react';
import PropTypes from 'prop-types';

import styles from './ratingPercent.less';
import PercentageNumber from '../shared/numbers/percentageNumber';

const RatingPercent = ({ likes, dislikes }) => (
  <div className={styles.ratingPercent}>
    <PercentageNumber
      className={styles.ratingPercentage}
      firstValue={likes}
      secondValue={dislikes}
    />
    {likes > 0 || dislikes > 0 ? <span>liked</span> : null}
  </div>
);

RatingPercent.propTypes = {
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
};

export default RatingPercent;
