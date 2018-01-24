import React from 'react';
import PropTypes from 'prop-types';

import LinkButton from '../shared/button/linkButton';

const ClearAllFilters = ({ className, currentPathname }) => (
  <LinkButton className={className} to={currentPathname}>
    clear all
  </LinkButton>
);

ClearAllFilters.defaultProps = {
  className: null,
};

ClearAllFilters.propTypes = {
  className: PropTypes.string,
  currentPathname: PropTypes.string.isRequired,
};

export default ClearAllFilters;
