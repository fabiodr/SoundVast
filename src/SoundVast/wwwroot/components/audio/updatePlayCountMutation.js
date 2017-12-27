import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';

const mutation = graphql`
  mutation updatePlayCountMutation(
    $input: UpdatePlayCountInput!
  ) {
    updatePlayCount(input: $input) {
      audio {
        playCount
      }
    }
  }
`;

export default (audioId) => {
  const variables = {
    input: {
      audioId,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
