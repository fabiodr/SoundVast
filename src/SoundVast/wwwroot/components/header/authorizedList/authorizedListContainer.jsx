import { connect } from 'react-redux';

import AuthorizedList from './authorizedList';

const mapStateToProps = state => ({
  userName: state.user.userName,
  isLoggedIn: state.user.isLoggedIn,
});

export default connect(mapStateToProps)(AuthorizedList);
