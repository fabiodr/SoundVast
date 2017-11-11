import React from 'react';
import PropTypes from 'prop-types';

import Account from '../../account/account';
import Header from '../../header/header';
import FooterPlaylist from '../../footerPlaylist/footerPlaylistContainer';
import Content from '../../content/content';

const PrimaryLayout = ({ children, user, loginProviders }) => (
  <div>
    <Account loginProviders={loginProviders} />
    <Header user={user} />
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
  loginProviders: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
};

export default PrimaryLayout;
