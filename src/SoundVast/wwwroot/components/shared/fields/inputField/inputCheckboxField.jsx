/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';

import ValidationField from '../validationField/validationField';
import CheckmarkIcon from '../../../icons/checkmark';
import styles from './inputCheckboxField.less';

const InputCheckboxField = ({
  input,
  meta: { touched, error = [] },
  id,
  label,
  ...props
}) => (
  <ValidationField touched={touched} error={error}>
    <div className={styles.inputCheckboxField}>
      <input {...input} {...props} className={styles.input} type="checkbox" id={id} />
      <label className={styles.customCheckbox} htmlFor={id}>
        <CheckmarkIcon />
      </label>
      <div>
        <label htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  </ValidationField>
);

InputCheckboxField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};


export default InputCheckboxField;
