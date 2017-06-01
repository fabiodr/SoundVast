import { connect } from 'react-redux';

import UnAuthorizedList from './unAuthorizedList';

const mapStateToProps = ({ user }) => ({
  isLoggedIn: user.isLoggedIn,
});

export default connect(mapStateToProps)(UnAuthorizedList);
