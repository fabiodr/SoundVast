import React from 'react';
import PropTypes from 'prop-types';

const Logout = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} action="">
    <input type="submit" value="Logout" />
  </form>
);

Logout.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Logout;
