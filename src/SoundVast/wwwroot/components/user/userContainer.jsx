import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import getUserDetails from './actions/getUserDetails';

const UserContainer = () => null;

export default compose(
  connect(),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(getUserDetails());
    },
  }),
)(UserContainer);
