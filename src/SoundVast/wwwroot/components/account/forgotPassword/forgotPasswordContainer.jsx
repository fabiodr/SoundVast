import { reduxForm, SubmissionError } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import ForgotPassword from './forgotPassword';
import generateResetPasswordTokenMutation from './generateResetPasswordTokenMutation';
import accountValidation from '../validation';

const handlers = {
  onSubmit: ({ dispatch }) => input =>
    generateResetPasswordTokenMutation(input, dispatch).catch((error) => {
      throw new SubmissionError(error);
    }),
};

const enhance = compose(
  connect(),
  withHandlers(handlers),
  reduxForm({
    form: 'forgotPassword',
    validate: accountValidation,
  }),
);

const ForgotPasswordContainer = enhance(ForgotPassword);

export default ForgotPasswordContainer;
