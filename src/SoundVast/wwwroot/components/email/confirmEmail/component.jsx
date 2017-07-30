import React from 'react';
import PropTypes from 'prop-types';
import { A } from 'react-html-email';

import Email from '../component';

const Message = ({ confirmEmailLink }) => (
  <Email title="Confirm Email">
    <p>
      Thanks for signing up to SoundVast!
    </p>
    <p>
      Please confirm your email address to complete your SoundVast registration.
    </p>
    <A href={confirmEmailLink}>
      Confirm your email
    </A>
  </Email>
);

Message.propTypes = {
  confirmEmailLink: PropTypes.string.isRequired,
};

export default Message;
