import React from 'react';
import { graphql } from 'react-relay';
import { renderEmail } from 'react-html-email';
import { createMutation } from 'relay-modern-hoc';

import ResetPasswordEmail from '../../email/resetPasswordEmail/resetPasswordEmail';
import sendEmailMutation from '../../email/sendEmailMutation';
import { showPasswordResetSentPopup } from '../actions';

const mutation = graphql`
  mutation generateResetPasswordTokenMutation(
    $input: GenerateResetPasswordTokenInput!
  ) {
    generateResetPasswordToken(input: $input) {
      user {
        id,
      },
      passwordResetToken
    }
  }
`;

export default ({ email }, dispatch) => {
  const variables = {
    input: {
      email,
    },
  };

  return createMutation(
    mutation,
    variables,
  ).then(({ generateResetPasswordToken }) => {
    const emailMessage = renderEmail(
      <ResetPasswordEmail
        resetPasswordLink={`${window.location.origin}/account/ResetPassword?token=${generateResetPasswordToken.passwordResetToken}
          &userId=${generateResetPasswordToken.user.id}`}
      />,
    );
    const subject = 'Reset your password';

    sendEmailMutation(email, subject, emailMessage).then(() => {
      dispatch(showPasswordResetSentPopup());
    });
  });
};
