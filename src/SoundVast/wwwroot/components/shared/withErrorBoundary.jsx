import React from 'react';
import { setDisplayName, wrapDisplayName, compose } from 'recompose';

import ErrorBoundary from './ErrorBoundary';

const withErrorBoundary = errorOutput => (Component) => {
  const ErrorBoundaryWrapper = props => (
    <ErrorBoundary errorOutput={errorOutput}>
      <Component {...props} />
    </ErrorBoundary>
  );

  return compose(
    setDisplayName(wrapDisplayName(Component, 'withErrorBoundary')),
  )(ErrorBoundaryWrapper);
};

export default withErrorBoundary;
