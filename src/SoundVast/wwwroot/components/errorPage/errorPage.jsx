import React from 'react';
import PropTypes from 'prop-types';

import styles from './errorPage.less';

const ErrorPage = ({ status, error, quotation }) => (
  <div className={styles.errorPage}>
    <h1>Error {status}</h1>
    <div className={styles.error}>{error}</div>
    <blockquote>{quotation}</blockquote>
  </div>
);

ErrorPage.propTypes = {
  status: PropTypes.number.isRequired,
  error: PropTypes.string.isRequired,
  quotation: PropTypes.string.isRequired,
};

export default ErrorPage;
