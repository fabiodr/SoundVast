import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose';

import { showModal } from '../modal/modalActions';
import AuthorizedComponent from './authorizedComponent';

export const mapStateToProps = ({ user }) => ({
  isLoggedIn: user.isLoggedIn,
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
