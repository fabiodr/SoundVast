import React from 'react';
import PropTypes from 'prop-types';

const SortIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <title>Sort</title>
    <path d="M6.5 11H10V0h2v11h3.5L11 15.5 6.5 11zM6 5v11H4V5H.5L5 .5 9.5 5H6z" />
  </svg>
);

SortIcon.defaultProps = {
  className: null,
};

SortIcon.propTypes = {
  className: PropTypes.string,
};

export default SortIcon;
