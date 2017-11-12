import { graphql, commitMutation } from 'react-relay';

import environment from '../app/environment/environment';

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

  commitMutation(environment, {
    mutation,
    variables,
  });
};
