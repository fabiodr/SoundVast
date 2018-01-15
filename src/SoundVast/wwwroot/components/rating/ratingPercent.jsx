import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './ratingPercent.less';
import PercentageNumber from '../shared/numbers/percentageNumber';

const RatingPercent = ({ className, likes, dislikes }) => (
  <div className={classnames(styles.ratingPercent, className)}>
    <PercentageNumber
      className={styles.ratingPercentage}
      firstValue={likes}
      secondValue={dislikes}
    />
    {likes > 0 || dislikes > 0 ? <span>liked</span> : null}
  </div>
);

RatingPercent.defaultProps = {
  className: null,
};

RatingPercent.propTypes = {
  className: PropTypes.string,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
};

export default RatingPercent;
