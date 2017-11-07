import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'found';

import LinkDropdown from '../../shared/dropDown/dropDownContainer';
import Logout from '../../account/logout/logoutContainer';

const AuthorizedList = ({ userName }) => (
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
);

AuthorizedList.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default AuthorizedList;
