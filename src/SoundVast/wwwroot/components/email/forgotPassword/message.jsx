import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ resetPasswordLink }) => (
  <div>
    We received a request to change your password on SoundVast.

    <a href={resetPasswordLink}>
      Click here to change your password
    </a>

    If you didn’t request a password change, you can ignore this
    message and continue to use your current password.
    Someone probably typed in your email address by accident.
  </div>
);

Message.propTypes = {
  resetPasswordLink: PropTypes.string.isRequired,
};

export default Message;
