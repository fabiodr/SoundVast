import React from 'react';
import PropTypes from 'prop-types';

import styles from './errorPage.less';

const ErrorPage = ({ status, error, quotation }) => (
  <div className={styles.errorPage}>
    <h1>Error {status}</h1>
    <div className={styles.error}>
      <div>
        {error}
      </div>
      We have been notified of the error and have sent Kanye West to investigate it ¯\_(ツ)_/¯.
    </div>
    <blockquote>{quotation}</blockquote>
  </div>
);

ErrorPage.defaultProps = {
  error: 'An unknown error has occured.',
};

ErrorPage.propTypes = {
  status: PropTypes.number.isRequired,
  error: PropTypes.string,
  quotation: PropTypes.string.isRequired,
};

export default ErrorPage;
