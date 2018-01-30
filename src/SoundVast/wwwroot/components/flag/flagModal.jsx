import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../shared/modal/modalContainer';
import SpinnerSubmit from '../shared/form/spinnerSubmit/spinnerSubmitContainer';

const FlagModal = ({ modalId, handleSubmit, form, isAuthorized, children }) => (
  <Modal authRequired title="Flag." id={modalId} isAuthorized={isAuthorized}>
    <form onSubmit={handleSubmit} action="">
      {children}
      <SpinnerSubmit formName={form}>Flag</SpinnerSubmit>
    </form>
  </Modal>
);

FlagModal.propTypes = {
  modalId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  form: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};

export default FlagModal;
