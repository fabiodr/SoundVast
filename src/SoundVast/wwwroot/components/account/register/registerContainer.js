import { reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import Register from './register';
import accountValidation from '../validation';
import registerAccountMutation from './registerAccountMutation';
import { hideModal } from '../../shared/modal/actions';
import { showLoginPopup } from '../actions';

const handlers = {
  onSubmit: ({ dispatch }) => input =>
    new Promise((resolve, reject) => {
      registerAccountMutation(input, () => {
        dispatch(hideModal());
        dispatch(showLoginPopup());
        resolve();
      }, (errors) => {
        reject(new SubmissionError(errors));
      });
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
