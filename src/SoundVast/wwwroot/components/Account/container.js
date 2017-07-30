import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { getAccountDetails } from './actions';
import Account from './component';

export default compose(
  connect(),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(getAccountDetails());
    },
  }),
)(Account);
