import React from 'react';
import PropTypes from 'prop-types';

import ValidationErrors from '../../../../shared/form/validation/errors/errors';
import AntiForgeryToken from '../../../../shared/form/antiForgeryToken/container';
import SpinnerButton from '../../../../shared/spinners/button/button';

const Form = ({ error: errors, children, handleSubmit, removeFile,
index, form, isSubmitting }) => (
  <form onSubmit={handleSubmit} action="">
    <AntiForgeryToken form={form} />
    <ValidationErrors errors={errors} />

    {children}

    <SpinnerButton isLoading={isSubmitting}>
      Save
    </SpinnerButton>
    <button type="button" className="cancel" onClick={() => removeFile(index)}>
      Cancel
    </button>
  </form>
);

Form.defaultProps = {
  error: [],
  isSubmitting: false,
};

Form.propTypes = {
  form: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  removeFile: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  error: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Form;
