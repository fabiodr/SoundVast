import React from 'react';
import PropTypes from 'prop-types';

import styles from './metadata.less';
import FormGroup from '../../../shared/form/formGroup';

const Metadata = ({ children }) => (
  <div className={styles.metadata}>
    <FormGroup className={styles.formGroup}>
      {children}
    </FormGroup>
  </div>
);

Metadata.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Metadata;
