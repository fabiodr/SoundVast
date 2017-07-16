import React from 'react';
import PropTypes from 'prop-types';

const AuthorizedComponent = ({ baseComponent: BaseComponent, isLoggedIn, ...props }) => (
  isLoggedIn ? <BaseComponent {...props} /> : null
);

AuthorizedComponent.defaultProps = {
  isLoggedIn: false,
};

AuthorizedComponent.propTypes = {
  baseComponent: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
};

export default AuthorizedComponent;
