import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';

const mutation = graphql`
  mutation socialLoginConfirmationMutation(
    $input: ExternalLoginConfirmationInput!
  ) {
    externalLoginConfirmation(input: $input) {
      clientMutationId,
    }
  }
`;

export default ({ userName, returnUrl }) => {
  const variables = {
    input: {
      userName,
    },
  };

  return createMutation(
    mutation,
    variables,
  ).then(() => {
    location.href = returnUrl;
  });
};
