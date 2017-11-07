import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import validateForm from '../../../shared/validation/validateForm';
import SocialLoginConfirmationForm from './socialLoginConfirmationForm';
import accountValidation from '../../validation';
import socialLoginConfirmationMutation from './socialLoginConfirmationMutation';

const mapStateToProps = (state, { email, returnUrl }) => ({
  initialValues: {
    email,
    returnUrl,
  },
});

const handlers = {
  onSubmit: () => input => validateForm(input)(socialLoginConfirmationMutation),
};

export default compose(
  connect(mapStateToProps),
  withHandlers(handlers),
  reduxForm({
    form: 'socialLoginConfirmation',
    validate: accountValidation,
  }),
)(SocialLoginConfirmationForm);
