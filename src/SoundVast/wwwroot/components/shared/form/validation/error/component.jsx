import React from 'react';
import PropTypes from 'prop-types';

import styles from './component.less';

const Error = ({ error }) => (
  error !== null ?
    <span className={styles.error}>
      {error}
    </span>
  : null
);

Error.defaultProps = {
  error: null,
};

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
