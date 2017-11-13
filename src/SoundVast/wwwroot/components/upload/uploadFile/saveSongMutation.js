import { graphql, commitMutation } from 'react-relay';

import environment from '../../app/environment/environment';

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

  commitMutation(environment, {
    mutation,
    variables,
  });
};
