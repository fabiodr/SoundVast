import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from '../header.less';

const AuthorizedList = ({ isLoggedIn, userName }) => (
  isLoggedIn ?
    <li>
      <button className={styles.dropdown}>
        <span className="userName">{userName}</span>
        <ul>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <form action="account/logout" name="logout">
              <input type="submit" value="Logout" />
            </form>
          </li>
        </ul>
      </button>
    </li>
  : null
);

AuthorizedList.defaultProps = {
  userName: null,
};

AuthorizedList.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userName: PropTypes.string,
};

export default AuthorizedList;
