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

export default ({
  name,
  artists,
  album,
  imagePath,
  genres,
  releaseDate,
}) => {
  const variables = {
    input: {
      coverImageUrl: imagePath,
      name,
      album: album.value,
      releaseDate: releaseDate && new Date(releaseDate).toISOString(),
      artists: artists.map(artist => ({ artist: artist.value })),
      genreIds: genres.map(genre => genre.value),
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
