import { reduxForm } from 'redux-form';

import SocialLoginConfirmationForm from './form';

export default reduxForm({
  form: 'socialLoginConfirmation',
  fields: ['__RequestVerificationToken'],
})(SocialLoginConfirmationForm);
