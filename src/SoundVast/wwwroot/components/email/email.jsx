import React from 'react';
import PropTypes from 'prop-types';
import { Email, Item, Image } from 'react-html-email-browser';

const SharedEmail = ({ title, children }) => (
  <Email title={title}>
    <Item align="center">
      <Image width={288} height={50} alt="SoundVast" src={`${window.location.origin}/images/logo/SoundVast_288x50.png`} />
      <br />
    </Item>
    <Item>
      {children}
    </Item>
  </Email>
);

SharedEmail.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default SharedEmail;
