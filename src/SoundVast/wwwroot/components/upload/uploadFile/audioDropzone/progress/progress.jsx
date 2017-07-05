import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ progressPercent }) => (
  <progress value={progressPercent} max={100} />
);

Progress.propTypes = {
  progressPercent: PropTypes.number.isRequired,
};

export default Progress;
