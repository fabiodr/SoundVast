import React from 'react';
import PropTypes from 'prop-types';

import styles from './modal.less';
import ModalOverlay from './overlay/modalOverlay';

const Modal = ({ children, title, showCurrentModal, showModal }) => (
  showCurrentModal ?
    <div>
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
  : null
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  showCurrentModal: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default Modal;
