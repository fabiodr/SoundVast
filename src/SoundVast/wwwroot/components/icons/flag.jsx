import React from 'react';
import PropTypes from 'prop-types';

const FlagIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M0 0h2v16H0V0zm10 1c-.5 0-.75-.25-1-.5S8.5 0 8 0H3v10h5c.5 0 .75.25 1 .5s.5.5 1 .5h5V1h-5z" />
  </svg>
);

FlagIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default FlagIcon;
