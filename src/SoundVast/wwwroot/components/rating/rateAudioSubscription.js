import { graphql, requestSubscription } from 'react-relay';

import environment from '../app/environment/environment';

const subscription = graphql`
  subscription rateAudioSubscription(
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

  requestSubscription(environment, {
    subscription,
    variables,
  });
};
