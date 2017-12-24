import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';

const mutation = graphql`
  mutation createPlaylistMutation(
    $input: CreatePlaylistInput!
  ) {
    createPlaylist(input: $input) {
      playlist {
        id
      }
    }
  }
`;

export default (input, songId) => {
  const variables = {
    input: {
      ...input,
      songId,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
