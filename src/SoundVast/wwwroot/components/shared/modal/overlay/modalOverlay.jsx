import React from 'react';
import PropTypes from 'prop-types';

import styles from './modalOverlay.less';

const ModalOverlay = ({ showModal }) =>
  <div tabIndex={-1} role="button" className={styles.overlay} onClick={showModal} />;

ModalOverlay.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default ModalOverlay;
