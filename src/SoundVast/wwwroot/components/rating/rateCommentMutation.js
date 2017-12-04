import { graphql } from 'react-relay';
import { createMutation } from 'relay-modern-hoc';

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
