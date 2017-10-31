import { graphql, commitMutation } from 'react-relay';

import environment from '../../app/environment/environment';

const mutation = graphql`
  mutation saveSongMutation($formValues: SongInput!) {
    saveSong(song: $formValues) {
      id
    }
  }
`;

export default ({ name, artist, imagePath, genreId }) => {
  const variables = {
    formValues: {
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
