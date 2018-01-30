import React from 'react';
import PropTypes from 'prop-types';
import ValidationField from '../validationField/validationField';

import styles from './inputRadioButtonGroup.less';

const InputRadioButtonGroup = ({
  icon,
  input,
  meta: { touched, error = [] },
  options,
  ...props
}) => (
  <ValidationField touched={touched} error={error}>
    <div className={styles.inputRadioButtonGroup} >
      {options.map(option => (
        <div className={styles.radioButton}>
          <input
            {...input}
            {...props}
            className={styles.input}
            type="radio"
            value={option.value}
            id={option.id}
          />
          <label className={styles.label} htmlFor={option.id}>
            {option.text}
          </label>
        </div>
      ))}
    </div>
  </ValidationField>
);

InputRadioButtonGroup.propTypes = {
  icon: PropTypes.node.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      value: PropTypes.any,
    }).isRequired,
  ).isRequired,
};

export default InputRadioButtonGroup;
