import { reduxForm } from 'redux-form';

import SocialLoginsForm from './form';

export default reduxForm({
  form: 'socialLogins',
})(SocialLoginsForm);
