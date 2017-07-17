import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { submit } from './actions';
import SocialLoginConfirmationForm from './form';
import accountValidation from '../../../../validation';

const mapStateToProps = (state, { email, returnUrl }) => ({
  initialValues: {
    email,
    returnUrl,
  },
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (values) => {
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    return dispatch(submit(formData));
  },
});


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'socialLoginConfirmation',
    validate: accountValidation,
  }),
)(SocialLoginConfirmationForm);
