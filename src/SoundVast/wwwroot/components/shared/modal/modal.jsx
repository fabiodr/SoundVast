import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './modal.less';
import ModalOverlay from './overlay/overlay';

const Modal = ({ children, title, isCurrentModal, hideModal }) => (
  <div className={classNames(!isCurrentModal && styles.hide)}>
    <div className={styles.modal}>
      <button onClick={hideModal} className={styles.close}>
        <span role="img" aria-label="close">
          ❌
        </span>
      </button>
      <div className={styles.title}>
        {title}
      </div>
      {children}
    </div>
    <ModalOverlay hideModal={hideModal} />
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  isCurrentModal: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default Modal;
