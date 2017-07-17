import { connect } from 'react-redux';

import Profile from './profile';

const mapStateToProps = ({ account }) => ({
  userName: account.userName,
});

export default connect(mapStateToProps)(Profile);
