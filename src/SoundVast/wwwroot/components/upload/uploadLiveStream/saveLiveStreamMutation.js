import { graphql } from 'react-relay';
import { createMutation } from 'relay-compose';

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

  return createMutation(
    mutation,
    variables,
  );
};
