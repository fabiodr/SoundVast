import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { getUserDetails } from './userActions';
import User from './user';

export default compose(
  connect(),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(getUserDetails());
    },
  }),
)(User);
