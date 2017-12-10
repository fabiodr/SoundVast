import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';

const mutation = graphql`
  mutation rateCommentMutation(
    $input: RateInput!
  ) {
    rateComment(input: $input) {
      rating {
        comment {
          likes
          dislikes
        }
      }
    }
  }
`;

export default (id, liked) => {
  const variables = {
    input: {
      id,
      liked,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
