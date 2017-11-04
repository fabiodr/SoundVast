import { graphql, commitMutation } from 'react-relay';

import environment from '../../app/environment/environment';

const mutation = graphql`
  mutation saveLiveStreamMutation($input: SaveLiveStreamInput!) {
    saveLiveStream(input: $input) {
      liveStream {
        audioId
      }
    }
  }
`;

export default ({ name, liveStreamUrl, imagePath, genreId }) => {
  const variables = {
    input: {
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
