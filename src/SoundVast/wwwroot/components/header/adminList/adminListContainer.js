import { connect } from 'react-redux';

import AdminList from './adminList';

const mapStateToProps = ({ account }) => ({
  isAdmin: account.isAdmin,
});

export default connect(mapStateToProps)(AdminList);
