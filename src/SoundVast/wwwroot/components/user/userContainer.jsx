import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { getUserDetails } from './userActions';
import Register from './register/register';

const UserContainer = () => (
  <Register />
);

export default compose(
  connect(),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(getUserDetails());
    },
  }),
)(UserContainer);
