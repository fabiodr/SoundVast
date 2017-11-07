import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import Register from './register';
import accountValidation from '../validation';
import registerMutation from './registerMutation';
import validateForm from '../../shared/validation/validateForm';

const handlers = {
  onSubmit: ({ dispatch }) => input =>
    validateForm(input, dispatch)(registerMutation),
};

export default compose(
  connect(),
  withHandlers(handlers),
  reduxForm({
    form: 'register',
    validate: accountValidation,
  }),
)(Register);
