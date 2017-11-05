import { graphql, commitMutation } from 'react-relay';

import environment from '../app/environment/environment';

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

  commitMutation(environment, {
    mutation,
    variables,
  });
};
