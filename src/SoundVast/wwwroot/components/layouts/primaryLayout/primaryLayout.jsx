import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../header/component';
import Account from '../../account/container';
import FooterPlaylist from '../../footerPlaylist/container';
import Content from '../../content/component';

const PrimaryLayout = ({ children }) => (
  <div>
    <Header />
    <Account />
    <Content>
      {children}
    </Content>
    <FooterPlaylist />
  </div>
);

PrimaryLayout.defaultProps = {
  children: null,
};

PrimaryLayout.propTypes = {
  children: PropTypes.node,
};

export default PrimaryLayout;
