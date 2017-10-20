import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import { reduxForm } from 'redux-form';

import { getSocialLogins } from './actions';
import SocialLogins from './socialLogins';
import SocialLoginsErrorMessage from './socialLoginsErrorMessage';

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
  branch(
    ({ loginProviders }) => loginProviders === null,
    renderComponent(SocialLoginsErrorMessage),
  ),
  reduxForm({
    form: 'socialLogins',
  }),
)(SocialLogins);
