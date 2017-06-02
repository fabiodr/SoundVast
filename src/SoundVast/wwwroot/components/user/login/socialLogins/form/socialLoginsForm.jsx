import React from 'react';
import PropTypes from 'prop-types';

import styles from './socialLoginsForm.less';
import { hr } from '../../../../shared/modal/modal.less';
import SocialLogin from './socialLogin/socialLogin';
import AntiForgeryToken from '../../../../shared/form/antiForgeryToken/antiForgeryTokenContainer';

const SocialLoginsForm = ({ loginProviders }) => (
  <form action="account/externalLogin" method="post" className="form-horizontal">
    <AntiForgeryToken />
    <div className={styles.socialLogins}>
      <div className="row-eq-height">
        {
          loginProviders.map(loginProvider => (
            <SocialLogin
              key={loginProvider.authenticationScheme}
              {...loginProvider}
            />
          ))
        }
      </div>
    </div>
    <hr className={hr} />
  </form>
);

SocialLoginsForm.defaultProps = {
  loginProviders: null,
};

SocialLoginsForm.propTypes = {
  loginProviders: PropTypes.arrayOf(
    PropTypes.shape({
      authenticationScheme: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default SocialLoginsForm;
