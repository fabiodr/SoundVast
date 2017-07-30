import { connect } from 'react-redux';

import AuthorizedList from './component';

const mapStateToProps = ({ account }) => ({
  userName: account.userName,
  isLoggedIn: account.isLoggedIn,
});

export default connect(mapStateToProps)(AuthorizedList);
