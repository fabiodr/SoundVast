import { connect } from 'react-redux';

import AuthorizedList from './authorizedList';

const mapStateToProps = ({ user }) => ({
  userName: user.userName,
  isLoggedIn: user.isLoggedIn,
});

export default connect(mapStateToProps)(AuthorizedList);
