import { graphql } from 'react-relay';
import { createMutation } from 'relay-modern-hoc';

const mutation = graphql`
  mutation socialLoginConfirmationMutation(
    $input: ExternalLoginConfirmationInput!
  ) {
    externalLoginConfirmation(input: $input) {
      clientMutationId,
    }
  }
`;

export default ({ email, returnUrl }) => {
  const variables = {
    input: {
      email,
    },
  };

  return createMutation(
    mutation,
    variables,
  ).then(() => {
    location.href = returnUrl;
  });
};
