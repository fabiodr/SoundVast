import { graphql, commitMutation } from 'react-relay';

import environment from '../app/environment/environment';

const mutation = graphql`
  mutation rateAudioMutation(
    $audioRating: AudioRatingInput!
  ) {
    rateAudio(audioRating: $audioRating) {
      likes,
      dislikes,
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
    updater: (proxyStore) => {
      debugger;
      const rateAudio = proxyStore.getRootField('rateAudio');
      const likes = rateAudio.getValue('likes');

      const audio = proxyStore.get(audioId);
    },
  });
};
