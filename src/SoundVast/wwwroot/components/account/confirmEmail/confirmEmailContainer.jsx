/* eslint-disable import/prefer-default-export */

import React from 'react';
import { graphql } from 'react-relay';

import { showEmailConfirmationPopup } from '../actions';
import ValidationErrors from '../../shared/validation/validationErrors';

const query = graphql`
  query confirmEmailContainerQuery(
    $userId: String!
    $token: String!
  ) {
    confirmEmail(userId: $userId, token: $token)
  }
`;

/* eslint-disable react/prop-types */
const render = ({ props, error }) => {
  if (error) {
    const errors = Object.keys(error).map(key => error[key]);

    return <ValidationErrors errors={errors} />;
  }

  if (props) {
    props.context.store.dispatch(showEmailConfirmationPopup());

    props.router.replace('/');
  }

  return null;
};
/* eslint-disable react/prop-types */

export const routeConfig = {
  query,
  prepareVariables: ({ userId, token }) => ({ userId, token }),
  render,
};
