import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ resetPasswordLink }) => (
  <div>
    <p>
      We received a request to change your password on SoundVast.
    </p>
    <a href={resetPasswordLink}>
      Click here to change your password
    </a>
    <p>
      If you didn’t request a password change, you can ignore this
      message and continue to use your current password.
      Someone probably typed in your email address by accident.
    </p>
  </div>
);

Message.propTypes = {
  resetPasswordLink: PropTypes.string.isRequired,
};

export default Message;
