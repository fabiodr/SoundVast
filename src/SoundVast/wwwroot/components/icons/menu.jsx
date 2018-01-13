import React from 'react';
import PropTypes from 'prop-types';

const MenuIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M1 3h14v2H1V3zm0 4h14v2H1V7zm0 4h14v2H1v-2z" />
  </svg>
);

MenuIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default MenuIcon;
