import React from 'react';
import PropTypes from 'prop-types';
import { A } from 'react-html-email-browser';

import Email from '../email';

const Message = ({ resetPasswordLink }) => (
  <Email title="Reset your password">
    <p>
      We received a request to change your password on SoundVast.
    </p>
    <A href={resetPasswordLink}>
      Click here to change your password
    </A>
    <p>
      If you didn&apos;t request a password change, you can ignore this
      message and continue to use your current password.
      Someone probably typed in your email address by accident.
    </p>
  </Email>
);

Message.propTypes = {
  resetPasswordLink: PropTypes.string.isRequired,
};

export default Message;
