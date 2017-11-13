import { reduxForm } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import Logout from './logout';
import logoutAccountMutation from './logoutAccountMutation';

const handlers = {
  onSubmit: ({ dispatch }) => () => logoutAccountMutation(dispatch),
};

export default compose(
  connect(),
  withHandlers(handlers),
  reduxForm({
    form: 'logout',
  }),
)(Logout);
