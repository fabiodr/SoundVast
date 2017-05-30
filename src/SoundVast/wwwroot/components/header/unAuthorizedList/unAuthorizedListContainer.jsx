import { connect } from 'react-redux';

import UnAuthorizedList from './unAuthorizedList';

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
});

export default connect(mapStateToProps)(UnAuthorizedList);
