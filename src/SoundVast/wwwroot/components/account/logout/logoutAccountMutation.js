import { graphql, commitMutation } from 'react-relay';

import environment from '../../app/environment/environment';
import { showTextPopup } from '../../shared/popup/actions';

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
      dispatch(showTextPopup('You have successfully logged out.'));
    },
  });
};
