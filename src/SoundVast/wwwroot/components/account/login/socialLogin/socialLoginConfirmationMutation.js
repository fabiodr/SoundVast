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

export default ({ username }, onError) => {
  const variables = {
    input: {
      username,
    },
  };

  commitMutation(environment, {
    mutation,
    variables,
    onError,
  });
};
