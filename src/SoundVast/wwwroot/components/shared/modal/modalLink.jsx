import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ children, modalId, showModal, ...props }) => (
  <a tabIndex={0} role="link" onClick={() => showModal(modalId)} {...props}>
    {children}
  </a>
);

Link.propTypes = {
  modalId: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
