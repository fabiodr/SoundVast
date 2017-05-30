import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AdminList = ({ isAdmin }) => (
  isAdmin ?
    <ul>
      <li><Link to="rolesadmin/index" className="nav-link admin-roles">Admin Roles</Link></li>
      <li><Link to="usersadmin/index" className="nav-link admin-user">Admin User</Link></li>
      <li><Link to="filestream/reportfilestreams" className="nav-link report-file-stream">Report FileStreams</Link></li>
    </ul>
  : null
);

AdminList.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default AdminList;
