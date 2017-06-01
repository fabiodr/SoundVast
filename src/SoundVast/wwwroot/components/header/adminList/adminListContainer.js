import { connect } from 'react-redux';

import AdminList from './adminList';

const mapStateToProps = ({ user }) => ({
  isAdmin: user.isAdmin,
});

export default connect(mapStateToProps)(AdminList);
