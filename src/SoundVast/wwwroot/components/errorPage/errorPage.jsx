import React from 'react';
import PropTypes from 'prop-types';

const ErrorPage = ({ status, error, quotation }) => (
  <div>
    <h1>{status}</h1>
    <div>{error}</div>
    <div>{quotation}</div>
  </div>
);

ErrorPage.propTypes = {
  status: PropTypes.number.isRequired,
  error: PropTypes.string.isRequired,
  quotation: PropTypes.string.isRequired,
};

export default ErrorPage;
