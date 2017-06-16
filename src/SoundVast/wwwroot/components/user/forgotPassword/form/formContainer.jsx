import React from 'react';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { renderEmail } from 'react-html-email';

import ForgotPasswordForm from './form';
import ForgotPasswordEmail from '../../../email/forgotPassword/forgotPassword';
import { submit } from './formActions';
import { sendEmail } from '../../../email/emailActions';
import userValidation from '../../userValidation';

const mapDispatchToProps = dispatch => ({
  onSubmit: (values) => {
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    return dispatch(submit(formData)).then((json) => {
      const emailMessage = renderEmail(
        <ForgotPasswordEmail resetPasswordLink={json.resetPasswordLink} />,
      );

      dispatch(sendEmail(json.email, emailMessage, 'Reset Password'));
    });
  },
});

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'forgotPassword',
    validate: userValidation,
  }),
)(ForgotPasswordForm);
