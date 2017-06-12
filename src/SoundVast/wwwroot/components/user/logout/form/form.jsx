import React from 'react';
import PropTypes from 'prop-types';

import AntiForgeryToken from '../../../shared/form/antiForgeryToken/antiForgeryTokenContainer';

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} action="">
    <AntiForgeryToken form="logout" />

    <input type="submit" value="Logout" />
  </form>
);


Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
