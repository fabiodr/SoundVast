import React from 'react';
import PropTypes from 'prop-types';

const ModalLink = ({ children, modalId, showModal }) => (
  <button onClick={() => showModal(modalId)}>
    {children}
  </button>
);

ModalLink.propTypes = {
  modalId: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalLink;
