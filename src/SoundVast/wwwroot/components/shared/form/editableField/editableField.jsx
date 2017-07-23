import React from 'react';
import PropTypes from 'prop-types';

import styles from './editableField.less';
import ValidationErrors from '../validation/errors/errors';

const EditableField = ({ children, error, touched }) => {
  let errors = error;

  if (!Array.isArray(error)) {
    errors = [error];
  }

  return (
    <div className={styles.editableFieldContainer}>
      {React.cloneElement(React.Children.only(children), { className: styles.editableField })}
      { touched ? <ValidationErrors errors={errors} /> : null }
    </div>
  );
};

EditableField.defaultProps = {
  error: null,
};

EditableField.propTypes = {
  children: PropTypes.node.isRequired,
  touched: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
};

export default EditableField;
