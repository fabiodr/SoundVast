import { connect } from 'react-redux';

import AdminList from './adminList';

const mapStateToProps = state => ({
  isAdmin: state.user.isAdmin,
});

export default connect(mapStateToProps)(AdminList);
