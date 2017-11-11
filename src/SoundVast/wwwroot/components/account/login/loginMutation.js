import { graphql, commitMutation } from 'react-relay';

import { hideModal } from '../../shared/modal/actions';
import { showLoginPopup } from '../actions';

const mutation = graphql`
  mutation loginMutation(
    $input: LoginInput!
  ) {
    login(input: $input) {
      user {
        id,
        userName
      }
    }
  }
`;

export default (environment, input, dispatch, onError, onCompleted) => {
  const variables = {
    input: {
      username: input.username,
      password: input.password,
      rememberMe: input.rememberMe,
    },
  };

  commitMutation(environment, {
    mutation,
    variables,
    onError,
    onCompleted: () => {
      dispatch(hideModal());
      dispatch(showLoginPopup());
      onCompleted();
    },
    updater: (store) => {
      const login = store.getRootField('login');
      const user = login.getLinkedRecord('user');
      const root = store.getRoot();

      root.setLinkedRecord(user, 'user');
    },
  });
};
