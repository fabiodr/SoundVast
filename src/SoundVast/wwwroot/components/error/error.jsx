import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const error = params.get('error');

  return (
    <div>
      <h1>Error</h1>
      <span>{error}</span>
    </div>
  );
};

Error.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default Error;
