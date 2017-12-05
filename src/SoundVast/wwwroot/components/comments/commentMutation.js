import { graphql } from 'react-relay';
import { createMutation } from 'relay-modern-hoc';

const mutation = graphql`
  mutation commentMutation(
    $input: SaveCommentInput!
  ) {
    comment(input: $input) {
      comment {
        id
      },
    }
  }
`;

export default ({ body }, audioId, originalCommentId) => {
  const variables = {
    input: {
      body,
      audioId,
      originalCommentId,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
