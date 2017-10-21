import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'found';

import LinkDropdown from '../../shared/dropDown/dropDownContainer';
import Logout from '../../account/logout/logoutContainer';

const AuthorizedList = ({ isLoggedIn, userName }) => (
  isLoggedIn ?
    <li>
      <LinkDropdown title={userName}>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Logout />
        </li>
      </LinkDropdown>
    </li>
    : null
);

AuthorizedList.defaultProps = {
  userName: null,
  isLoggedIn: false,
};

AuthorizedList.propTypes = {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string,
};

export default AuthorizedList;
