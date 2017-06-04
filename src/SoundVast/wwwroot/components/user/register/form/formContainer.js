import { reduxForm } from 'redux-form';

import RegisterForm from './form';
import validate from '../../userValidation';

export default reduxForm({
  form: 'register',
  fields: ['__RequestVerificationToken'],
  validate,
})(RegisterForm);
