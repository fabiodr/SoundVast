import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { showPopup } from '../../shared/popup/popupActions';

export default compose(
  connect(),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(showPopup('confirmedEmailSuccess'));
      this.props.history.replace('/');
    },
  }),
)(() => null);
