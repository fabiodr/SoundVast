/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import SocialLoginConfirmationForm from './form/container';

const Confirmation = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const email = params.get('email');
  const loginProvider = params.get('loginProvider');
  const returnUrl = params.get('returnUrl');

  return (
    <div>
      <h3>Associate your {loginProvider} account.</h3>

      <SocialLoginConfirmationForm
        loginProvider={loginProvider}
        email={email}
        returnUrl={returnUrl}
      />
    </div>
  );
};

Confirmation.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Confirmation;
