import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';

const mutation = graphql`
  mutation flagCommentMutation($input: FlagCommentInput!) {
    flagComment(input: $input) {
      flag {
        id
      }
    }
  }
`;

export default ({ reason, additionalDetails }, commentId) => {
  const variables = {
    input: {
      commentId,
      reason,
      additionalDetails,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
