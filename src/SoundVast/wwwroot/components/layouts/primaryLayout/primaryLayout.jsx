import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../header/header';
import Account from '../../account/accountContainer';
import FooterPlaylist from '../../footerPlaylist/footerPlaylistContainer';
import Content from '../../content/content';

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
