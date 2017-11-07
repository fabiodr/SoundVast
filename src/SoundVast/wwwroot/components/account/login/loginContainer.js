import { reduxForm } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import Login from './login';
import accountValidation from '../validation';
import loginMutation from './loginMutation';
import validateForm from '../../shared/validation/validateForm';

const handlers = {
  onSubmit: ({ dispatch }) => input =>
    validateForm(input, dispatch)(loginMutation),
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
