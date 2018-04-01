import React from 'react';
import PropTypes from 'prop-types';

import styles from './listeners.less';

const Listeners = ({ listeners }) => (
  <div className={styles.listeners}>{listeners} listeners</div>
);

Listeners.propTypes = {
  listeners: PropTypes.number.isRequired,
};

export default Listeners;
