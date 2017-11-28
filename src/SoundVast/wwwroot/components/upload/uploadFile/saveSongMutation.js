import { graphql } from 'react-relay';
import { createMutation } from 'relay-modern-hoc';

const mutation = graphql`
  mutation saveSongMutation($input: SaveSongInput!) {
    saveSong(input: $input) {
      song {
        audioId
      }
    }
  }
`;

export default ({ name, artist, imagePath, genreId }) => {
  const variables = {
    input: {
      coverImageUrl: imagePath,
      name,
      artist,
      genreId,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
