import { graphql, commitMutation } from 'react-relay';

import environment from '../../../app/environment/environment';

const mutation = graphql`
  mutation uploadImageMutation {
    uploadImage
  }
`;

export default (id, file) => {
  commitMutation(environment, {
    upadater: (proxyStore) => {
      debugger
    },
    mutation,
    uploadables: {
      file,
    },
  });
};
