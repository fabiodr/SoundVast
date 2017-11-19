/* eslint-disable no-underscore-dangle */
import React from 'react';
import { HttpError } from 'found';

import ValidationErrors from '../../shared/validation/validationErrors';

const withRouteValidation = route => (render) => {
  if (route.error) {
    let errors = [];

    if (route.error._error) {
      errors = route.error._error;
    } else {
      throw new HttpError('500');
    }

    return <ValidationErrors errors={errors} />;
  }
  return render(route);
};

export default withRouteValidation;
