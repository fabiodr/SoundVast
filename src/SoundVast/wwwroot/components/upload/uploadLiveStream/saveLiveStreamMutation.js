import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';

const mutation = graphql`
  mutation saveLiveStreamMutation($input: SaveLiveStreamInput!) {
    saveLiveStream(input: $input) {
      liveStream {
        user {
          contributionScore
        }
      }
      contributionPoints
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
