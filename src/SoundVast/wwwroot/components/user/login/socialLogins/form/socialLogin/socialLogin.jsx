import React from 'react';
import PropTypes from 'prop-types';

import styles from './socialLogin.less';

const SocialLogin = ({ authenticationScheme, displayName }) => (
  <div className="col-centered">
    <button
      type="submit"
      className={styles.submit}
      value={authenticationScheme}
      name="provider"
      title={`Log in using your ${displayName} account`}
    >
      <img src={`images/loginProviders/${authenticationScheme}_40.png`} alt={displayName} />
    </button>
  </div>
);

SocialLogin.propTypes = {
  authenticationScheme: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
};

export default SocialLogin;
