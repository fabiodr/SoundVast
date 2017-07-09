import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ progressPercent }) => (
  <progress value={progressPercent} max={100} />
);

Progress.defaultProps = {
  progressPercent: 0,
};

Progress.propTypes = {
  progressPercent: PropTypes.number,
};

export default Progress;
