import React from 'react';
import PropTypes from 'prop-types';

import ValidationErrors from '../../../../shared/form/validation/errors/errors';

const Form = ({ error: errors, children, handleSubmit, cancel, index }) => (
  <form onSubmit={handleSubmit} action="">
    <ValidationErrors errors={errors} />

    {children}

    <button>Save</button>
    <button className="cancel" onClick={() => cancel(index)}>
      Cancel
    </button>
  </form>
);

Form.defaultProps = {
  error: [],
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  cancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Form;
