import React from 'react';
import PropTypes from 'prop-types';

import SpinnerIcon from '../../icons/spinner';

const SpinnerButton = ({ isLoading, children }) => (
  <button>
    {isLoading ? <SpinnerIcon /> : children}
  </button>
);

SpinnerButton.defaultProps = {
  isLoading: false,
};

SpinnerButton.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default SpinnerButton;
