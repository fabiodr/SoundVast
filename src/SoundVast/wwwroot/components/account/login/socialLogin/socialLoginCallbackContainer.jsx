/* eslint-disable import/prefer-default-export */
import React from 'react';
import { graphql } from 'react-relay';

import HandleRouteError from '../../../app/routing/handleRouteError';
import { showLoginPopup } from '../../actions';

const query = graphql`
  query socialLoginCallbackContainerQuery {
    externalLoginCallback {
      loginProvider,
      email
    }
  }
`;

const render = (route) => {
  if (route.props) {
    // User already has an account that is logged in
    if (!route.props.externalLoginCallback) {
      route.props.context.store.dispatch(showLoginPopup());

      route.props.router.replace(route.props.params.returnUrl);
    } else {
      // redirect to associate account
    }
  }

  return null;
};

export const routeConfig = {
  query,
  prepareVariables: ({ returnUrl }) => ({ returnUrl }),
  render: route => render(route),
  // (route) => {
  //   let error = route.error;

  //   if (route.match.params.remoteError) {
  //     error = {
  //       _error: ['An error has occured with the social login.'],
  //     };
  //   }

  //   return (
  //     <HandleRouteError error={error}>
  //       {() => render(route)}
  //     </HandleRouteError>
  //   );
  // },
};
