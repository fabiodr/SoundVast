import React from 'react';
import PropTypes from 'prop-types';

import styles from './socialLogins.less';
import { hr } from '../../../shared/modal/component.less';
import SocialLoginsButton from './socialLoginsButton';
import AntiForgeryToken from '../../../shared/form/antiForgeryToken/container';

const SocialLogins = ({ loginProviders }) => (
  <form action="account/externalLogin" method="post">
    <AntiForgeryToken form="socialLogins" />
    <input type="hidden" name="returnUrl" value={window.location.pathname} />

    <div className={styles.socialLogins}>
      {
        loginProviders.map(loginProvider => (
          <SocialLoginsButton
            key={loginProvider.authenticationScheme}
            {...loginProvider}
          />
        ))
      }
    </div>
    <hr className={hr} />
  </form>
);

SocialLogins.defaultProps = {
  loginProviders: [],
};

SocialLogins.propTypes = {
  loginProviders: PropTypes.arrayOf(
    PropTypes.shape({
      authenticationScheme: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SocialLogins;
