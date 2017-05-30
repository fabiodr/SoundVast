import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AuthorizedList = ({ isLoggedIn, userName }) => (
  isLoggedIn ?
    <li>
      <div className="nav-dropdown">
        <span>{userName}</span>
        <ul className="menu">
          <li>
            <Link to="profile" className="nav-link profile">Profile</Link>
          </li>
          <li>
            <form action="account/logout" name="logout-form" id="logout-form">
              <input type="submit" value="Logout" />
            </form>
          </li>
        </ul>
      </div>
    </li>
  : null
);

AuthorizedList.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
};

export default AuthorizedList;
