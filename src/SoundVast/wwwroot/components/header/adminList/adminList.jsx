import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'found';

const AdminList = ({ isAdmin }) => (
  isAdmin ?
    <ul>
      <li><Link to="/rolesadmin/index">Admin Roles</Link></li>
      <li><Link to="/usersadmin/index">Admin User</Link></li>
      <li><Link to="/filestream/reportfilestreams">Report FileStreams</Link></li>
    </ul>
    : null
);

AdminList.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default AdminList;
