import { reduxForm, SubmissionError } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import Login from './login';
import accountValidation from '../validation';
import loginMutation from './loginMutation';

const handlers = {
  onSubmit: ({ dispatch }) => input =>
    loginMutation(input, dispatch).catch((error) => {
      throw new SubmissionError(error);
    }),
};

export default compose(
  connect(),
  withHandlers(handlers),
  reduxForm({
    form: 'login',
    validate: accountValidation,
    initialValues: {
      rememberMe: true,
    },
  }),
)(Login);
