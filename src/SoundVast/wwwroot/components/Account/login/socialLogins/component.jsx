import React from 'react';
import PropTypes from 'prop-types';

import SocialLoginsErrorMessage from './errorMessage/component';
import SocialLoginsForm from './form/container';

const SocialLogins = ({ loginProviders }) => (
  <div>
    {
      loginProviders === null ? <SocialLoginsErrorMessage />
      : <SocialLoginsForm loginProviders={loginProviders} />
    }
  </div>
);

SocialLogins.defaultProps = {
  loginProviders: null,
};

SocialLogins.propTypes = {
  loginProviders: PropTypes.arrayOf(
    PropTypes.shape({
      authenticationScheme: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default SocialLogins;
