import React from 'react';
import PropTypes from 'prop-types';

import styles from './overlay.less';

const Overlay = ({ showModal }) =>
  <div tabIndex={-1} role="button" className={styles.overlay} onClick={showModal} />;

Overlay.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default Overlay;
