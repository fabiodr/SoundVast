import React from 'react';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { renderEmail } from 'react-html-email';

import ForgotPasswordForm from './form';
import ForgotPasswordEmailMessage from '../../../email/forgotPassword/message';
import { submit, sendEmail } from '../form/formActions';
import userValidation from '../../userValidation';

const mapDispatchToProps = dispatch => ({
  onSubmit: (values) => {
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    return dispatch(submit(formData)).then((json) => {
      const emailMessage = renderEmail(
        <ForgotPasswordEmailMessage resetPasswordLink={json.resetPasswordLink} />,
      );

      dispatch(sendEmail(json.email, emailMessage));
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
