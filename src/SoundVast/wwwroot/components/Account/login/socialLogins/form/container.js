import { reduxForm } from 'redux-form';

import SocialLoginsForm from './component';

export default reduxForm({
  form: 'socialLogins',
})(SocialLoginsForm);
