import { graphql } from 'react-relay';
import { createMutation } from 'relay-compose';

const mutation = graphql`
  mutation sendEmailMutation(
    $input: SendEmailInput!
  ) {
    sendEmail(input: $input) {
      clientMutationId
    }
  }
`;

export default (email, subject, message) => {
  const variables = {
    input: {
      email,
      subject,
      message,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
