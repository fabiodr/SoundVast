import { reduxForm } from 'redux-form';
import { compose, withHandlers, withProps } from 'recompose';

import validateForm from '../../../shared/validation/validateForm';
import SocialLoginConfirmationForm from './socialLoginConfirmationForm';
import accountValidation from '../../validation';
import socialLoginConfirmationMutation from './socialLoginConfirmationMutation';

const createProps = ({ email, returnUrl }) => ({
  initialValues: {
    email,
    returnUrl,
  },
});

const handlers = {
  onSubmit: () => input => validateForm(input)(socialLoginConfirmationMutation),
};

export default compose(
  withProps(createProps),
  withHandlers(handlers),
  reduxForm({
    form: 'socialLoginConfirmation',
    validate: accountValidation,
  }),
)(SocialLoginConfirmationForm);
