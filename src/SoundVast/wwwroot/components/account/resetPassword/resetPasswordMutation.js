import { graphql } from 'react-relay';
import { createMutation } from 'relay-compose';

import { showPasswordResetPopup } from '../actions';

const mutation = graphql`
  mutation resetPasswordMutation(
    $input: ResetPasswordInput!
  ) {
    resetPassword(input: $input) {
      clientMutationId,
    }
  }
`;

export default ({ password, userId, token }, dispatch) => {
  const variables = {
    input: {
      password,
      userId,
      token,
    },
  };

  return createMutation(
    mutation,
    variables,
  ).then(() => {
    dispatch(showPasswordResetPopup());
  });
};
