import { graphql, commitMutation } from 'react-relay';

import environment from '../../app/environment/environment';
import { hideModal } from '../../shared/modal/actions';
import { showLoginPopup } from '../actions';

const mutation = graphql`
  mutation loginMutation(
    $input: LoginInput!
  ) {
    login(input: $input) {
      user {
        userName
      }
    }
  }
`;

export default ({ username, password, rememberMe }, dispatch, onError, onCompleted) => {
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
    onCompleted: () => {
      dispatch(hideModal());
      dispatch(showLoginPopup());
      onCompleted();
    },
  });
};
