import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose';

import { showModal } from '../modal/actions';
import AuthorizedComponent from './component';

export const mapStateToProps = ({ account }) => ({
  isLoggedIn: account.isLoggedIn,
});

const authorizedComponent = BaseComponent => compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      if (this.props.isLoggedIn === false) {
        this.props.dispatch(showModal('login'));
      }
    },
    componentWillReceiveProps(nextProps) {
      if (!nextProps.isLoggedIn) {
        this.props.dispatch(showModal('login'));
      }
    },
  }),
  withProps({ baseComponent: BaseComponent }),
)(AuthorizedComponent);

export default authorizedComponent;
