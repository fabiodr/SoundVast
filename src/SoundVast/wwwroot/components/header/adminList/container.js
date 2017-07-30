import { connect } from 'react-redux';

import AdminList from './component';

const mapStateToProps = ({ account }) => ({
  isAdmin: account.isAdmin,
});

export default connect(mapStateToProps)(AdminList);
