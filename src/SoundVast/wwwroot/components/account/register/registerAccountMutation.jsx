import React from 'react';
import { graphql, commitMutation } from 'react-relay';
import { renderEmail } from 'react-html-email';

import environment from '../../app/environment/environment';
import ConfirmEmail from '../../email/confirmEmail/confirmEmail';
import sendEmailMutation from '../../email/sendEmailMutation';

const mutation = graphql`
  mutation registerAccountMutation(
    $input: RegisterAccountInput!
  ) {
    register(input: $input) {
      user {
        id,
        email,
      },
      emailConfirmationToken
    }
  }
`;

export default ({ username, password, email }, onSuccess, onError) => {
  const variables = {
    input: {
      username,
      password,
      email,
    },
  };

  commitMutation(environment, {
    mutation,
    variables,
    onError,
    onCompleted: ({ register }, errors) => {
      if (errors !== undefined) {
        return;
      }
      const emailMessage = renderEmail(
        <ConfirmEmail confirmEmailLink={`/account/confirmEmail?code=${register.code}&userId=${register.user.id}`} />,
      );
      const subject = 'Confirm your email';

      sendEmailMutation(register.user.email, subject, emailMessage);
      onSuccess(register);
    },
  });
};
