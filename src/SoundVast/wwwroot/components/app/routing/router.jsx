import React from 'react';
import PropTypes from 'prop-types';
import createConnectedRouter from 'found/lib/createConnectedRouter';
import createRender from 'found/lib/createRender';

const RenderError = ({ error }) => (
  <div>
    {error.status === 404 ? 'Not found' : 'Error'}
  </div>
);

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

