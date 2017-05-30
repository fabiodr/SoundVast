import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UnAuthorizedList = ({ isLoggedIn }) => (
  !isLoggedIn ?
    <ul>
      <li><Link to="account/login" className="nav-link popup-link" id="login-link">Login</Link></li>
      <li><Link to="account/register" className="nav-link popup-link" id="register-link">Register</Link></li>
    </ul>
  : null
);

UnAuthorizedList.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default UnAuthorizedList;
