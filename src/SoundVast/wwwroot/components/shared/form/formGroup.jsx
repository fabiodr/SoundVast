import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './formGroup.less';

const FormGroup = ({ className, children }) => (
  <div className={classnames(className, styles.formGroup)}>
    {children}
  </div>
);

FormGroup.defaultProps = {
  className: null,
};

FormGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FormGroup;
