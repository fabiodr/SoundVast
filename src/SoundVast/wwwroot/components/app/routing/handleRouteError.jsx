/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { HttpError } from 'found';

import ValidationErrors from '../../shared/validation/validationErrors';

const HandleRouteError = ({ error, children }) => {
  if (error) {
    let errors = [];

    if (error._error) {
      errors = error._error;
    } else {
      throw new HttpError('500');
    }

    return <ValidationErrors errors={errors} />;
  }
  return children();
};

HandleRouteError.defaultProps = {
  error: null,
};

HandleRouteError.propTypes = {
  children: PropTypes.func.isRequired,
  error: PropTypes.shape({
    _error: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default HandleRouteError;
