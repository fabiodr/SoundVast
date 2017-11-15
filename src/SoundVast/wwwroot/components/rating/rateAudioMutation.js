import { graphql } from 'react-relay';
import { createMutation } from 'relay-compose';

const mutation = graphql`
  mutation rateAudioMutation(
    $input: RateAudioInput!
  ) {
    rateAudio(input: $input) {
      rating {
        audio {
          likes
          dislikes
        }
      }
    }
  }
`;

export default (audioId, ratings, liked) => {
  const variables = {
    input: {
      audioId,
      liked,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
