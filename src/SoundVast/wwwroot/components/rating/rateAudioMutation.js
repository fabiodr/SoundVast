import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';

const mutation = graphql`
  mutation rateAudioMutation(
    $input: RateInput!
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

export default (audio, liked) => {
  const variables = {
    input: {
      id: audio.audioId,
      liked,
    },
  };

  return createMutation(
    mutation,
    variables,
    null,
    null,
    (store) => {
      const rateAudio = store.getRootField('rateAudio');
      const rating = rateAudio.getLinkedRecord('rating');
      const audioRecord = rating.getLinkedRecord('audio');

      if (audioRecord === null) {
        const audioProxy = store.get(audio.id);
        const likes = audioProxy.getValue('likes');
        const dislikes = audioProxy.getValue('dislikes');

        if (liked) {
          audioProxy.setValue(likes - 1, 'likes');
        } else {
          audioProxy.setValue(dislikes - 1, 'dislikes');
        }
      }
    },
  );
};
