import React from 'react';
import PropTypes from 'prop-types';

import styles from './modal.less';
import ModalOverlay from './overlay/modalOverlay';

const Modal = ({ children, title, containerClass, showModal }) => (
  <div className={containerClass}>
    <div className={styles.layout}>
      <button onClick={showModal} className={styles.close}>
        <span role="img" aria-label="close">
          ❌
        </span>
      </button>
      <div className={styles.title}>
        {title}
      </div>
      {children}
    </div>
    <ModalOverlay showModal={showModal} />
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  containerClass: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default Modal;
