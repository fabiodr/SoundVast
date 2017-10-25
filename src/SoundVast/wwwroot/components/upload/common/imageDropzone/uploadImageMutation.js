import { graphql, commitMutation } from 'react-relay';

import environment from '../../../app/environment/environment';

const mutation = graphql`
  mutation uploadImageMutation {
    uploadImage {
      imagePath
    }
  }
`;

export default (id, file) => {
  commitMutation(environment, {
    updater: (proxyStore) => {
      debugger
      const uploadImage = proxyStore.getRootField('uploadImage');
      const imagePath = uploadImage.getValue('imagePath');


    },
    mutation,
    uploadables: {
      file,
    },
  });
};
