import React from 'react';
import PropTypes from 'prop-types';

import styles from './form.less';
import { hr } from '../../../../shared/modal/modal.less';
import SocialLogin from './socialLogin/socialLogin';
import AntiForgeryToken from '../../../../shared/form/antiForgeryToken/container';

const Form = ({ loginProviders }) => (
  <form action="account/externalLogin" method="post">
    <AntiForgeryToken form="socialLogins" />
    <input type="hidden" name="returnUrl" value={window.location.pathname} />

    <div className={styles.socialLogins}>
      {
        loginProviders.map(loginProvider => (
          <SocialLogin
            key={loginProvider.authenticationScheme}
            {...loginProvider}
          />
        ))
      }
    </div>
    <hr className={hr} />
  </form>
);

Form.defaultProps = {
  loginProviders: [],
};

Form.propTypes = {
  loginProviders: PropTypes.arrayOf(
    PropTypes.shape({
      authenticationScheme: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default Form;