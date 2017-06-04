import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ children, modalId, showModal }) => (
  <button onClick={() => showModal(modalId)}>
    {children}
  </button>
);

Link.propTypes = {
  modalId: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
