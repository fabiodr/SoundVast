import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { showTextPopup } from '../../shared/popup/actions';

export default compose(
  connect(),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(showTextPopup('You have successfully confirmed your email.'));
      this.props.history.replace('/');
    },
  }),
)(() => null);
