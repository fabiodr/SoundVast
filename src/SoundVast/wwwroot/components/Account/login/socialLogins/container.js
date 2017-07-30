import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { getSocialLogins } from './actions';
import SocialLogins from './component';

const mapStateToProps = ({ socialLogins }) => ({
  loginProviders: socialLogins.loginProviders,
});

export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(getSocialLogins());
    },
  }),
)(SocialLogins);
