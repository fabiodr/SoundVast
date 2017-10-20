import React from 'react';
import PropTypes from 'prop-types';

import styles from './socialLogins.less';

const SocialLoginsButton = ({ authenticationScheme, displayName }) => (
  <button
    className={styles.socialLoginProviderButton}
    value={authenticationScheme}
    name="provider"
    title={`Log in using your ${displayName} account`}
  >
    <img src={`/images/loginProviders/${authenticationScheme}_40.png`} alt={displayName} />
  </button>
);

SocialLoginsButton.propTypes = {
  authenticationScheme: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
};

export default SocialLoginsButton;
