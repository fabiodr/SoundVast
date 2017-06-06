import React from 'react';
import PropTypes from 'prop-types';

import styles from './error.less';

const Error = ({ touched, error }) => (
  touched && error !== null ?
    <span className={styles.error}>
      {error}
    </span>
  : null
);

Error.defaultProps = {
  error: null,
};

Error.propTypes = {
  touched: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
};

export default Error;
