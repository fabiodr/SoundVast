import { graphql } from 'react-relay';
import { createMutation } from 'relay-modern-hoc';

import { showLogoutPopup } from '../actions';

const mutation = graphql`
  mutation logoutAccountMutation {
    logout {
      clientMutationId
    }
  }
`;

export default dispatch =>
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
  ).then(() => dispatch(showLogoutPopup()));
