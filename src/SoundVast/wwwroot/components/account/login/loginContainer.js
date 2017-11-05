import { reduxForm } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import Login from './login';
import accountValidation from '../validation';
import loginAccountMutation from './loginAccountMutation';
import { hideModal } from '../../shared/modal/actions';
import { showLoginPopup } from '../actions';
import validateForm from '../../shared/validation/validateForm';

const handlers = {
  onSubmit: ({ dispatch }) => input =>
    validateForm(input)(loginAccountMutation, () => {
      dispatch(hideModal());
      dispatch(showLoginPopup());
    }),
};

// const handlers = {
//   onSubmit: ({ dispatch }) => (input) => {
// debugger
//     const HOC = (resolve, errorCallback) => {debugger
//       loginAccountMutation(input, () => {
//         dispatch(hideModal());
//         dispatch(showLoginPopup());
//         resolve();
//       }, errorCallback);
//     };
//     return validateForm(HOC);
//   },
// };

// const handlers = {
//   onSubmit: ({ dispatch }) => input =>
//     new Promise((resolve, reject) => {
//       loginAccountMutation(input, () => {
//         dispatch(hideModal());
//         dispatch(showLoginPopup());
//         resolve();
//       }, (errors) => {
//         reject(new SubmissionError(errors));
//       });
//     }),
// };

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
