import { reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import Register from './register';
import accountValidation from '../validation';
import registerMutation from './registerMutation';

const handlers = {
  onSubmit: ({ dispatch }) => input =>
    registerMutation(input, dispatch).catch((error) => {
      throw new SubmissionError(error);
    }),
};

export default compose(
  connect(),
  withHandlers(handlers),
  reduxForm({
    form: 'register',
    validate: accountValidation,
  }),
)(Register);
