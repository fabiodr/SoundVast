import React from 'react';
import PropTypes from 'prop-types';

import styles from './name.less';

const Name = ({ name }) => (
  <div className={styles.name}>{name}</div>
);

Name.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Name;
