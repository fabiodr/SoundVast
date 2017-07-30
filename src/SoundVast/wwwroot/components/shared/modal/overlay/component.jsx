import React from 'react';
import PropTypes from 'prop-types';

import styles from './component.less';

const Overlay = ({ hideModal }) =>
  <div tabIndex={-1} role="button" className={styles.overlay} onClick={hideModal} />;

Overlay.propTypes = {
  hideModal: PropTypes.func.isRequired,
};

export default Overlay;
