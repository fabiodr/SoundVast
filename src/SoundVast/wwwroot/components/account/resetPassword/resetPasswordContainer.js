import { reduxForm } from 'redux-form';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import ResetPassword from './resetPassword';
import { submit } from './actions';
import accountValidation from '../validation';

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
    form: 'resetPassword',
    validate: accountValidation,
  }),
  lifecycle({
    componentDidMount() {
      const params = new URLSearchParams(this.props.location.search);
      const userId = params.get('userId');
      const code = params.get('code');

      this.props.change('userId', userId);
      this.props.change('code', code);
    },
  }),
)(ResetPassword);
