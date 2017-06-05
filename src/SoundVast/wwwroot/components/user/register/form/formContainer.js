import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import RegisterForm from './form';
import validate from '../../userValidation';
import { submit } from '../form/formActions';

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
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'register',
    fields: ['__RequestVerificationToken'],
    validate,
  }),
)(RegisterForm);
