import React from 'react';

import LinkButton from '../shared/button/linkButton';

const HeaderTermsLink = () => (
  <LinkButton
    styleName="secondary"
    to="/termsAndConditions"
  >
    Terms/Conditions
  </LinkButton>
);

export default HeaderTermsLink;
