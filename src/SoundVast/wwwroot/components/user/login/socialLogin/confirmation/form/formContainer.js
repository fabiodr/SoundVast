import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { submit } from '../../../../../shared/form/formActions';
import SocialLoginConfirmationForm from './form';
import userValidation from '../../../../userValidation';

const mapStateToProps = (state, { email }) => ({
  initialValues: {
    email,
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
    fields: ['__RequestVerificationToken'],
    validate: userValidation,
  }),
)(SocialLoginConfirmationForm);
