import { graphql, commitMutation } from 'react-relay';

import environment from '../../../app/environment/environment';

const mutation = graphql`
  mutation uploadAudioFilesMutation {
    uploadImage {
      imagePath
    }
  }
`;

export default (id, file) => {
  commitMutation(environment, {
    onCompleted: (respone) => {

    },
    mutation,
    uploadables: {
      file,
    },
  });
};
