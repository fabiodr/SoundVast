import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';

const mutation = graphql`
  mutation editSongMutation($input: EditSongInput!) {
    editSong(input: $input) {
      song {
        id
      }
    }
  }
`;

export default ({ name, artist, imagePath, genreId, free }, songId) => {
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
