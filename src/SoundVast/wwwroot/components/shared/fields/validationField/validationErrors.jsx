import React from 'react';
import PropTypes from 'prop-types';

import ValidationError from './validationError';
import styles from './validationErrors.less';

const Errors = ({ errors }) => (
  errors.length ? (
    <div className={styles.errors}>
      {errors.map(error => <ValidationError key={error} error={error} />)}
    </div>
  ) : null
);

Errors.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default Errors;
