import React from 'react';
import PropTypes from 'prop-types';

const MenuIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <path d="M0 3h50v2H0zm0 14h50v2H0zm0 14h50v2H0zm0 14h50v2H0z" />
  </svg>
);

MenuIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default MenuIcon;
