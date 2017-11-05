import { graphql, commitMutation } from 'react-relay';

import environment from '../../app/environment/environment';

const mutation = graphql`
  mutation loginAccountMutation(
    $input: LoginAccountInput!
  ) {
    login(input: $input) {
      clientMutationId,
    }
  }
`;

export default ({ username, password, rememberMe }, onSuccess, onError) => {
  const variables = {
    input: {
      username,
      password,
      rememberMe,
    },
  };

  commitMutation(environment, {
    mutation,
    variables,
    onError,
    onCompleted: ({ login }, errors) => {
      if (errors !== undefined) {
        return;
      }

      onSuccess(login);
    },
  });
};
