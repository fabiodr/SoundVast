import { connect } from 'react-redux';

import Profile from './component';

const mapStateToProps = ({ account }) => ({
  userName: account.userName,
});

export default connect(mapStateToProps)(Profile);
