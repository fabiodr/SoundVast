import React from 'react';

import LinkButton from '../shared/button/linkButton';

const HeaderPrivacyLink = () => (
  <LinkButton
    styleName="secondary"
    to="/privacyPolicy"
  >
    Privacy
  </LinkButton>
);

export default HeaderPrivacyLink;
