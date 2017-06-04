import { reduxForm } from 'redux-form';

import SocialLoginForm from './form';

export default reduxForm({
  form: 'socialLogin',
  fields: ['__RequestVerificationToken'],
})(SocialLoginForm);
