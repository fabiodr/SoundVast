import React from 'react';
import PropTypes from 'prop-types';

import AntiForgeryToken from '../../shared/form/antiForgeryToken/container';

const Logout = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} action="">
    <AntiForgeryToken form="logout" />

    <input type="submit" value="Logout" />
  </form>
);

Logout.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Logout;
