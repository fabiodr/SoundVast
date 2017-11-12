import React from 'react';
import { graphql } from 'react-relay';
import { renderEmail } from 'react-html-email';
import { createMutation } from 'relay-compose';

import ConfirmEmail from '../../email/confirmEmail/confirmEmail';
import sendEmailMutation from '../../email/sendEmailMutation';
import { hideModal } from '../../shared/modal/actions';
import { showLoginPopup } from '../actions';

const mutation = graphql`
  mutation registerMutation(
    $input: RegisterInput!
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
  ).then(({ register }) => {
    const emailMessage = renderEmail(
      <ConfirmEmail confirmEmailLink={`/account/confirmEmail?code=${register.code}&userId=${register.user.id}`} />,
    );
    const subject = 'Confirm your email';

    sendEmailMutation(register.user.email, subject, emailMessage);
    dispatch(hideModal());
    dispatch(showLoginPopup());
  });
};
