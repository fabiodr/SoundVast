import React from 'react';
import PropTypes from 'prop-types';
import AirbnbPropTypes from 'airbnb-prop-types';

import styles from './progress.less';

const Progress = ({ value, message }) => (
  <div>
    {message && <div className={styles.message}>{message}</div>}
    <div className={styles.progressContainer}>
      <progress value={value} max={100} />
    </div>
  </div>
);

Progress.defaultProps = {
  value: 0,
  message: null,
};

Progress.propTypes = {
  value: AirbnbPropTypes.between({
    gte: 0,
    lte: 100,
  }),
  message: PropTypes.string,
};

export default Progress;
