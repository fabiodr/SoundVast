import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';

const mutation = graphql`
  mutation saveLiveStreamMutation($input: SaveLiveStreamInput!) {
    saveLiveStream(input: $input) {
      liveStream {
        id
      }
    }
  }
`;

export default ({
  name,
  liveStreamUrl,
  websiteUrl,
  genres = [],
  tags = [],
}, coverImageName) => {
  const variables = {
    input: {
      coverImageName,
      name,
      liveStreamUrl,
      websiteUrl,
      tags: tags.map(tag => ({
        id: Number.isInteger(tag.value) ? tag.value : null,
        tag: typeof (tag.value) === 'string' ? tag.value : null,
      })),
      genreIds: genres.map(genre => genre.value),
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
