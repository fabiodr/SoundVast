import React from 'react';
import PropTypes from 'prop-types';

const RemoveFilter = ({ onClick }) => (
  <button onClick={onClick}>
    x
  </button>
);

RemoveFilter.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RemoveFilter;
