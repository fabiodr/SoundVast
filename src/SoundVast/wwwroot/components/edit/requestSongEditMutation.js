import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';

const mutation = graphql`
  mutation requestSongEditMutation(
    $input: RequestEditSongInput!
  ) {
    requestSongEdit(input: $input) {
      clientMutationId
    }
  }
`;

export default ({ name, artists, imagePath, genres, free }, songId) => {
  const variables = {
    input: {
      songId,
      coverImageUrl: imagePath,
      name,
      artist,
      genreId,
      free,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
