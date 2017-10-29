import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import Login from './login';
import accountValidation from '../validation';
import { submit } from './actions';

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(submit(values)),
});

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'login',
    validate: accountValidation,
  }),
)(Login);
