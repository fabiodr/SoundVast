import React from 'react';
import PropTypes from 'prop-types';
import ResizableTextArea from 'react-fluid-textarea';

import styles from './inputTextareaField.less';
import ValidationField from '../validationField/validationField';

const Textarea = ({
  input,
  meta: { touched, error = [] },
  ...props
}) => (
  <ValidationField touched={touched} error={error}>
    <ResizableTextArea
      {...input}
      className={styles.textArea}
      onChange={e => input.onChange(e.currentTarget.value)}
      {...props}
    />
  </ValidationField>
);

Textarea.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }).isRequired,
};

export default Textarea;
