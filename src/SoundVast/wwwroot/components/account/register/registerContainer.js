import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import Register from './register';
import accountValidation from '../validation';
import { submit } from './actions';

export const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(submit(values)),
});

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'register',
    validate: accountValidation,
  }),
)(Register);
