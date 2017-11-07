import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../header/header';
import FooterPlaylist from '../../footerPlaylist/footerPlaylistContainer';
import Content from '../../content/content';

const PrimaryLayout = ({ user, children }) => (
  <div>
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
  user: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
};

export default PrimaryLayout;
