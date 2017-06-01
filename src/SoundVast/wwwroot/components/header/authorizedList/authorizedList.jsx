import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from '../header.less';

const AuthorizedList = ({ isLoggedIn, userName }) => (
  isLoggedIn ?
    <li>
      <div className={styles.navDropdown}>
        <span className="userName">{userName}</span>
        <ul className={styles.navDropdownList}>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <form action="account/logout" name="logout">
              <input type="submit" value="Logout" />
            </form>
          </li>
        </ul>
      </div>
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
