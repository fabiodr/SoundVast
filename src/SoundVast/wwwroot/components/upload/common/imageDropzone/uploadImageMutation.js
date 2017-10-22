import { graphql, commitMutation } from 'react-relay';

import environment from '../../../app/environment/environment';
import { updateCoverImage } from '../../actions';

const mutation = graphql`
  mutation uploadImageMutation {
    uploadImage
  }
`;

export default (id, file) => {
  commitMutation(environment, {
    onCompleted: () => updateCoverImage(id, file),
    mutation,
    uploadables: {
      file,
    },
  });
};
