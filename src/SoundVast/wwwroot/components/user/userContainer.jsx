import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { getUserDetails } from './userActions';

const UserContainer = () => null;

export default compose(
  connect(),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(getUserDetails());
    },
  }),
)(UserContainer);
