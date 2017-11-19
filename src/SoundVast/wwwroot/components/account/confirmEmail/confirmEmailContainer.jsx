/* eslint-disable import/prefer-default-export */
import React from 'react';
import { graphql } from 'react-relay';

import { showEmailConfirmationPopup } from '../actions';
import HandleRouteError from '../../app/routing/handleRouteError';

const query = graphql`
  query confirmEmailContainerQuery(
    $userId: String!
    $token: String!
  ) {
    confirmEmail(userId: $userId, token: $token)
  }
`;

const render = (route) => {
  if (route.props) {
    route.props.context.store.dispatch(showEmailConfirmationPopup());

    route.props.router.replace('/');
  }

  return null;
};

export const routeConfig = {
  query,
  prepareVariables: ({ userId, token }) => ({ userId, token }),
  render: route => (
    <HandleRouteError error={route.error}>
      {() => render(route)}
    </HandleRouteError>
  ),
};
