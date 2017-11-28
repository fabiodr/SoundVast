import React from 'react';
import PropTypes from 'prop-types';
import createConnectedRouter from 'found/lib/createConnectedRouter';
import createRender from 'found/lib/createRender';

import ValidationErrors from '../../shared/validation/validationErrors';

const RenderError = ({ error }) => {
  const status = parseInt(error.status, 10);

  if (error.data) {
    return <ValidationErrors errors={error.data} />;
  }

  switch (status) {
    case 404:
      return 'Not found';
    default:
      return 'Error';
  }
};

RenderError.propTypes = {
  error: PropTypes.shape({
    status: PropTypes.number.isRequired,
  }).isRequired,
};

export default createConnectedRouter({
  render: createRender({
    renderError: RenderError,
  }),
});

