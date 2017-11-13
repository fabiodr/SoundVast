import { graphql, commitMutation } from 'react-relay';

import environment from '../../app/environment/environment';
import { showLogoutPopup } from '../actions';

const mutation = graphql`
  mutation logoutAccountMutation {
    logout {
      clientMutationId
    }
  }
`;

export default (dispatch) => {
  commitMutation(environment, {
    mutation,
    onCompleted: () => {
      dispatch(showLogoutPopup());
    },
    updater: (store) => {
      const root = store.getRoot();
      const user = root.getLinkedRecord('user');

      user.setValue(null, 'userName');
    },
  });
};
