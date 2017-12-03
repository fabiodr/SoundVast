import React from 'react';
import PropTypes from 'prop-types';

import Account from '../../account/account';
import Header from '../../header/header';
import FooterPlaylist from '../../footerPlaylist/footerPlaylistContainer';
import Content from '../../content/content';
import SideBar from '../../sideBar/sideBar';
import styles from './primaryLayout.less';

const PrimaryLayout = ({ children, user, loginProviders }) => (
  <div>
    <Account loginProviders={loginProviders} />
    <Header user={user} />
    <div className={styles.main}>
      <Content>
        {children}
      </Content>
      <SideBar />
    </div>
    <FooterPlaylist />
  </div>
);

PrimaryLayout.defaultProps = {
  children: null,
  user: null,
};

PrimaryLayout.propTypes = {
  children: PropTypes.node,
  loginProviders: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
  }),
};

export default PrimaryLayout;
