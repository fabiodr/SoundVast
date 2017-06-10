/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './input.less';
import ValidationErrors from '../validation/errors/errors';

const Input = ({ input, meta: { touched, error = [] }, className, ...props }) => {
  let errors = error;

  if (!Array.isArray(error)) {
    errors = [error];
  }

  return (
    <div className={styles.inputContainer}>
      <input className={classNames(className, styles.input)} {...input} {...props} />
      { touched ? <ValidationErrors errors={errors} /> : null }
    </div>
  );
};

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
