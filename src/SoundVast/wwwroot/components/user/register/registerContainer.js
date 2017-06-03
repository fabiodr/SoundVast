import { reduxForm } from 'redux-form';

import Register from './register';

export default reduxForm({
  form: 'register',
  fields: ['__RequestVerificationToken'],
})(Register);
