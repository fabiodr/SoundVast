import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import Register from './register';
import accountValidation from '../validation';
import { submit } from './actions';

export const mapDispatchToProps = dispatch => ({
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
    validate: accountValidation,
  }),
)(Register);
