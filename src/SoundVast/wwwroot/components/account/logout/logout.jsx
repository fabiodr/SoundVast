import React from 'react';
import PropTypes from 'prop-types';

import SpinnerSubmit from '../../shared/form/spinnerSubmit/spinnerSubmitContainer';

const Logout = ({ handleSubmit, form }) => (
  <form onSubmit={handleSubmit} action="">
    <SpinnerSubmit formName={form} styleName="secondary">
      Logout
    </SpinnerSubmit>
  </form>
);

Logout.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired,
};

export default Logout;
