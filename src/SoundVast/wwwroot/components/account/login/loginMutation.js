import { graphql } from 'react-relay';
import { createMutation } from 'relay-compose';

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

export default (input, dispatch) => {
  const variables = {
    input: {
      username: input.username,
      password: input.password,
      rememberMe: input.rememberMe,
    },
  };

  return createMutation(
    mutation,
    variables,
    null,
    null,
    (store) => {
      const login = store.getRootField('login');

      if (login !== null) {
        const user = login.getLinkedRecord('user');
        const root = store.getRoot();

        root.setLinkedRecord(user, 'user');
      }
    },
  ).then((response, errors) => {
    dispatch(hideModal());
    dispatch(showLoginPopup());
  });
};
