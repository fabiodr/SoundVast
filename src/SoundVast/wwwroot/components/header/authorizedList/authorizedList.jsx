import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LinkDropdown from '../../shared/dropDown/container';
import LogoutForm from '../../account/logout/form/container';

const AuthorizedList = ({ isLoggedIn, userName }) => (
  isLoggedIn ?
    <li>
      <LinkDropdown title={userName}>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <LogoutForm />
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
