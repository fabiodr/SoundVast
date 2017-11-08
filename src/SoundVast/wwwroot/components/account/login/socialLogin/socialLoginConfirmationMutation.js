import { graphql, commitMutation } from 'react-relay';

import environment from '../../../app/environment/environment';

const mutation = graphql`
  mutation socialLoginConfirmationMutation(
    $input: ExternalLoginConfirmationInput!
  ) {
    externalLoginConfirmation(input: $input) {
      clientMutationId,
    }
  }
`;

export default ({ email, returnUrl }, onError, onCompleted) => {
  const variables = {
    input: {
      email,
    },
  };

  commitMutation(environment, {
    mutation,
    variables,
    onError,
    onCompleted: () => {
      location.href = returnUrl;

      onCompleted();
    },
  });
};
