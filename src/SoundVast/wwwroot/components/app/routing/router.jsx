import React from 'react';
import PropTypes from 'prop-types';
import createConnectedRouter from 'found/lib/createConnectedRouter';
import createRender from 'found/lib/createRender';

import ValidationErrors from '../../shared/validation/validationErrors';

const RenderError = ({ error, router }) => {
  if (error.data) {
    return <ValidationErrors errors={error.data} />;
  }

  router.replace(`/error/${error.status}`);

  return null;
};

RenderError.propTypes = {
  error: PropTypes.shape({
    status: PropTypes.number.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  router: PropTypes.object.isRequired,
};

export default createConnectedRouter({
  render: createRender({
    renderError: RenderError,
  }),
});

