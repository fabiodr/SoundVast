import React from 'react';
import PropTypes from 'prop-types';

import styles from './modal.less';

const Modal = ({ children, title, showModal }) => (
  showModal ?
    <div className={styles.layout}>
      <span role="img" aria-label="close" className={styles.close}>❌</span>
      <div className={styles.title}>
        {title}
      </div>
      {children}
    </div>
  : null
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
};

export default Modal;
