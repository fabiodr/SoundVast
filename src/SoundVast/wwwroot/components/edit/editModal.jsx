import React from 'react';
import PropTypes from 'prop-types';

import ValidationErrors from '../shared/validation/validationErrors';
import Modal from '../shared/modal/modalContainer';
import SpinnerSubmit from '../shared/form/spinnerSubmit/spinnerSubmitContainer';

const EditModal = ({ modalId, error: errors, handleSubmit, form, isAuthorized, children }) => (
  <Modal authRequired title="Edit." id={modalId} isAuthorized={isAuthorized}>
    <form onSubmit={handleSubmit} action="">
      <ValidationErrors errors={errors} />
      {children}
      <SpinnerSubmit formName={form}>Edit</SpinnerSubmit>
    </form>
  </Modal>
);

EditModal.defaultProps = {
  error: [],
};

EditModal.propTypes = {
  modalId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  form: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string.isRequired),
  isAuthorized: PropTypes.bool.isRequired,
};

export default EditModal;
