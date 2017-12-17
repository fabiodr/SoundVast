import React from 'react';
import PropTypes from 'prop-types';

import Account from '../../account/account';
import Header from '../../header/header';
import FooterPlaylist from '../../footerPlaylist/footerPlaylistContainer';
import Content from '../../content/content';
import styles from './primaryLayout.less';
import FlagAudioModal from '../../flag/flagAudioModalContainer';
import FlagCommentModal from '../../flag/flagCommentModalContainer';
import EditSongModal from '../../edit/editSongModalContainer';

const PrimaryLayout = ({ children, user, loginProviders }) => {
  const isAuthorized = user !== null;

  return (
    <div>
      <Account loginProviders={loginProviders} />
      <Header user={user} />
      <div className={styles.main} id="main">
        <Content>
          {children}
        </Content>
      </div>
      <FlagAudioModal isAuthorized={isAuthorized} />
      <FlagCommentModal isAuthorized={isAuthorized} />
      <EditSongModal isAuthorized={isAuthorized} />
      <FooterPlaylist />
    </div>
  );
};

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
