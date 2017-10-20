import { connect } from 'react-redux';

import Profile from './userProfile';

const mapStateToProps = ({ account }) => ({
  userName: account.userName,
});

export default connect(mapStateToProps)(Profile);
