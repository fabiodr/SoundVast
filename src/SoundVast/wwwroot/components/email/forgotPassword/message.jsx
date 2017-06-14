import React from 'react';
import PropTypes from 'prop-types';
import { Email, Item, Image, A } from 'react-html-email';

const Message = ({ resetPasswordLink }) => (
  <Email title="Reset your password">
    <Item align="center">
      <Image width={288} height={50} alt="SoundVast" src={`${window.location.origin}/images/logo/SoundVast_288x50.png`} />
      <br />
    </Item>
    <Item>
      <p>
        We received a request to change your password on SoundVast.
      </p>
      <A textDecoration="none" href={resetPasswordLink}>
        Click here to change your password
      </A>
      <p>
        If you didn’t request a password change, you can ignore this
        message and continue to use your current password.
        Someone probably typed in your email address by accident.
      </p>
    </Item>
  </Email>
);

Message.propTypes = {
  resetPasswordLink: PropTypes.string.isRequired,
};

export default Message;
