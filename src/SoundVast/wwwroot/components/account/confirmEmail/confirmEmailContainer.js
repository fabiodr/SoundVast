/* eslint-disable import/prefer-default-export */

import { graphql } from 'react-relay';

const query = graphql`
  query confirmEmailContainerQuery(
    $input: ConfirmEmailInput!
  ) {
    id,
  }
`;

export const routeConfig = {
  query,
};
