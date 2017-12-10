import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';

const mutation = graphql`
  mutation logoutAccountMutation {
    logout {
      clientMutationId
    }
  }
`;

export default () =>
  createMutation(
    mutation,
    null,
    null,
    null,
    (store) => {
      const root = store.getRoot();
      const user = root.getLinkedRecord('user');

      user.setValue(null, 'userName');
    },
  );
