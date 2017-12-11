import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';

const mutation = graphql`
  mutation flagAudioMutation($input: FlagAudioInput!) {
    flagAudio(input: $input) {
      flag {
        id
      }
    }
  }
`;

export default ({ reason, additionalDetails }, audioId) => {
  const variables = {
    input: {
      audioId,
      reason,
      additionalDetails,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
