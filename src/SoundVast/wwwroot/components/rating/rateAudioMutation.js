import { graphql, commitMutation } from 'react-relay';

import environment from '../app/environment/environment';

const mutation = graphql`
  mutation rateAudioMutation(
    $audioRating: AudioRatingInput!
  ) {
    rateAudio(audioRating: $audioRating) {
      audio {
        likes,
        dislikes,
      }
    }
  }
`;

export default (audioId, liked) => {
  const variables = {
    audioRating: {
      audioId,
      liked,
    },
  };

  commitMutation(environment, {
    mutation,
    variables,
  });
};
