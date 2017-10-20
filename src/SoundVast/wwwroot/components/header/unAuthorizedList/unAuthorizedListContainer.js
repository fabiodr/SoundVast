import { connect } from 'react-redux';

import UnAuthorizedList from './unAuthorizedList';

const mapStateToProps = ({ account }) => ({
  isLoggedIn: account.isLoggedIn,
});

export default connect(mapStateToProps)(UnAuthorizedList);
