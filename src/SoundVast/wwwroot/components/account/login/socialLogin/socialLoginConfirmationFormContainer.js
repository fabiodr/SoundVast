import { reduxForm, SubmissionError } from 'redux-form';
import { compose, withHandlers, withProps } from 'recompose';

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
  onSubmit: () => input => socialLoginConfirmationMutation(input).catch((error) => {
    throw new SubmissionError(error);
  }),
};

export default compose(
  withProps(createProps),
  withHandlers(handlers),
  reduxForm({
    form: 'socialLoginConfirmation',
    validate: accountValidation,
  }),
)(SocialLoginConfirmationForm);
