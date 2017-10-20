import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import UserUploads from './uploads';
import { getUserUploads } from '../actions';

const mapStateToProps = ({ profile }) => ({
  userAudios: profile.userAudios,
});

export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(getUserUploads());
    },
  }),
)(UserUploads);
