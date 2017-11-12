import { compose, branch, renderComponent } from 'recompose';
import { reduxForm } from 'redux-form';
import { fragment } from 'relay-compose';
import { graphql } from 'react-relay';

import SocialLogins from './socialLogins';
import SocialLoginsErrorMessage from './socialLoginsErrorMessage';

const fragments = graphql`
  fragment socialLoginsContainer_loginProviders on LoginProvider @relay(plural: true) {
    name,
    displayName
  }
`;

export default compose(
  fragment(fragments),
  branch(
    ({ loginProviders }) => loginProviders === null,
    renderComponent(SocialLoginsErrorMessage),
  ),
  reduxForm({
    form: 'socialLogins',
  }),
)(SocialLogins);
