import React from 'react';
import Route from 'found/lib/Route';

import ValidationErrors from '../../shared/validation/validationErrors';

class ErrorHandledRoute extends Route {
  render({ Component, props, error }) {debugger;
    if (error) {
      const errors = Object.keys(error).map(key => error[key]);

      return <ValidationErrors errors={errors} />;
    }

    return Component && props ? <Component {...props} /> : null;
  }
}

export default ErrorHandledRoute;
