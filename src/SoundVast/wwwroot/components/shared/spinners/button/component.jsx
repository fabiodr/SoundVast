import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../../../images/spinners/ellipsis.svg';

const SpinnerButton = ({ isLoading, children }) => (
  <button>
    {isLoading ? <Spinner /> : children}
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
