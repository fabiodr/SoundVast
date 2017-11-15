import React from 'react';
import { graphql } from 'react-relay';
import { renderEmail } from 'react-html-email';
import { createMutation } from 'relay-compose';

import ConfirmEmail from '../../email/confirmEmail/confirmEmail';
import sendEmailMutation from '../../email/sendEmailMutation';
import loginMutation from '../login/loginMutation';
import { showRegisteredPopup } from '../actions';

const mutation = graphql`
  mutation registerMutation(
    $input: RegisterInput!
  ) {
    register(input: $input) {
      user {
        id,
      },
      emailConfirmationToken
    }
  }
`;

export default ({ username, password, email }, dispatch) => {
  const variables = {
    input: {
      username,
      password,
      email,
    },
  };

  return createMutation(
    mutation,
    variables,
    null,
    null,
  ).then(({ register }) => {
    const emailMessage = renderEmail(
      <ConfirmEmail confirmEmailLink={`${window.location.origin}/account/confirmEmail?code=${register.emailConfirmationToken}&userId=${register.user.id}`} />,
    );
    const subject = 'Confirm your email';

    loginMutation({ username, password, rememberMe: true }, dispatch).then(() => {
      dispatch(showRegisteredPopup());
      sendEmailMutation(email, subject, emailMessage);
    });
  });
};
