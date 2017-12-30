import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';

const mutation = graphql`
  mutation saveSongMutation($input: SaveSongInput!) {
    saveSong(input: $input) {
      song {
        user {
          contributionScore
        }
      }
      contributionPoints
    }
  }
`;

export default ({ name, artist, album, imagePath, genreId }) => {
  const variables = {
    input: {
      coverImageUrl: imagePath,
      name,
      album,
      artist,
      genreId,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
