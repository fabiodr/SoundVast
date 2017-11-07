import { reduxForm } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { graphql } from 'react-relay';
import { fragmentContainer } from 'recompose-relay-modern';

import Login from './login';
import accountValidation from '../validation';
import loginMutation from './loginMutation';
import validateForm from '../../shared/validation/validateForm';

const fragments = graphql`
  fragment loginContainer on Node {
    id
  }
`;

const handlers = {
  onSubmit: ({ relay, dispatch }) => input =>
    validateForm(relay.environment, input, dispatch)(loginMutation),
};

export default compose(
  fragmentContainer(fragments),
  connect(),
  withHandlers(handlers),
  reduxForm({
    form: 'login',
    validate: accountValidation,
    initialValues: {
      rememberMe: true,
    },
  }),
)(Login);
