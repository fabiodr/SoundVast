import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children, title }) => (
  <div className="modal-layout">
    <span role="img" aria-label="close" className="modal-close">❌</span>
    <div className="modal-title">
      {title}
    </div>
    {children}
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
