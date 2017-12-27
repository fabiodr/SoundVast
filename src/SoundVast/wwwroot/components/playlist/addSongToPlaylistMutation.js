import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';

const mutation = graphql`
  mutation addSongToPlaylistMutation(
    $input: AddSongToPlaylistInput!
  ) {
    addSongToPlaylist(input: $input) {
      playlist {
        playlistId
        name
        coverImageUrl
      }
    }
  }
`;

export default (input) => {
  const variables = {
    input,
  };

  return createMutation(
    mutation,
    variables,
  );
};
