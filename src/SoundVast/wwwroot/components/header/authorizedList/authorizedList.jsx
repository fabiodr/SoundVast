import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LinkDropdown from '../../shared/dropDown/linkDropdownContainer';
import LogoutForm from '../../user/logout/form/formContainer';

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
};

AuthorizedList.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userName: PropTypes.string,
};

export default AuthorizedList;
