import { connect } from 'react-redux';
import { graphql } from 'react-relay';
import { compose, lifecycle, withProps, renameProp, branch, renderNothing, renderComponent, flattenProp } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';

import { showModal } from '../modal/actions';

const fragments = graphql`
  fragment withAuthorization_user on ApplicationUser {
    userName
  }
`;

const withAuthorization = BaseComponent => compose(
  connect(),
  fragmentContainer(fragments),
  flattenProp('user'),
  renameProp('userName', 'isLoggedIn'),
  lifecycle({
    componentDidMount() {
      if (!this.props.isLoggedIn) {
        this.props.dispatch(showModal('login'));
      }
    },
    componentWillReceiveProps(nextProps) {
      if (!nextProps.isLoggedIn) {
        this.props.dispatch(showModal('login'));
      }
    },
  }),
  withProps({ BaseComponent }),
  branch(
    props => props.isLoggedIn,
    renderComponent(BaseComponent),
  ),
)(renderNothing());

export default withAuthorization;
