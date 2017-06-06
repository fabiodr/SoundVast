/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './input.less';
import ValidationError from '../validation/error/error';

const Input = ({ input, meta: { touched, error }, className, ...props }) => (
  <div className={styles.inputContainer}>
    <input className={classNames(className, styles.input)} {...input} {...props} />
    <ValidationError touched={touched} error={error} />
  </div>
);

Input.defaultProps = {
  className: null,
};

Input.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
  }).isRequired,
  className: PropTypes.string,
};

export default Input;
