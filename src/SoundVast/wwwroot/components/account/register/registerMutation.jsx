import React from 'react';
import { graphql, commitMutation } from 'react-relay';
import { renderEmail } from 'react-html-email';

import environment from '../../app/environment/environment';
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

export default ({ username, password, email }, dispatch, onError, onCompleted) => {
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
    onCompleted: ({ register }) => {
      const emailMessage = renderEmail(
        <ConfirmEmail confirmEmailLink={`/account/confirmEmail?code=${register.code}&userId=${register.user.id}`} />,
      );
      const subject = 'Confirm your email';

      sendEmailMutation(register.user.email, subject, emailMessage);
      dispatch(hideModal());
      dispatch(showLoginPopup());
      onCompleted();
    },
  });
};
