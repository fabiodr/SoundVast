import React from 'react';
import PropTypes from 'prop-types';

const PlayCount = ({ playCount }) => (
  <div>
    {playCount} plays
  </div>
);

PlayCount.propTypes = {
  playCount: PropTypes.number.isRequired,
};

export default PlayCount;
