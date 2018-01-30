import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../shared/modal/modalContainer';
import SpinnerSubmit from '../shared/form/spinnerSubmit/spinnerSubmitContainer';

const EditModal = ({ modalId, handleSubmit, form, isAuthorized, children }) => (
  <Modal authRequired title="Edit." id={modalId} isAuthorized={isAuthorized}>
    <form onSubmit={handleSubmit} action="">
      {children}
      <SpinnerSubmit formName={form}>Edit</SpinnerSubmit>
    </form>
  </Modal>
);

EditModal.propTypes = {
  modalId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  form: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};

export default EditModal;
