import { graphql, commitMutation } from 'react-relay';

import environment from '../../app/environment/environment';

const mutation = graphql`
  mutation saveLiveStreamMutation($formValues: LiveStreamInput!) {
    saveLiveStream(liveStream: $formValues) {
      id
    }
  }
`;

export default ({ name, liveStreamUrl, imagePath, genreId }) => {
  const variables = {
    formValues: {
      coverImageUrl: imagePath,
      name,
      liveStreamUrl,
      genreId,
    },
  };

  commitMutation(environment, {
    mutation,
    variables,
  });
};
