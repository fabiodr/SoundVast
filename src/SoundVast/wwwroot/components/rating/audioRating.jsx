import React from 'react';
import PropTypes from 'prop-types';

import styles from './audioRating.less';
import PercentageNumber from '../shared/numbers/percentageNumber';
import getPercentage from '../shared/utilities/getPercentage';

const ratingColours = (likes, dislikes) => {
  const percent = getPercentage(likes, dislikes);

  if (percent > 90) {
    return styles.excellent;
  }

  if (percent > 75) {
    return styles.good;
  }

  return styles.bad;
};

const Rating = ({ likes, dislikes, children }) => {
  const ratingPercentClass = ratingColours(likes, dislikes);

  return (
    <div className={styles.rating}>
      <PercentageNumber className={ratingPercentClass} firstValue={likes} secondValue={dislikes} />
      {children}
    </div>
  );
};

Rating.propTypes = {
  children: PropTypes.node.isRequired,
  dislikes: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Rating;
