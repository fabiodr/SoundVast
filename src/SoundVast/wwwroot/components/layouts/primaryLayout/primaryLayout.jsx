import React from 'react';
import PropTypes from 'prop-types';

import Account from '../../account/account';
import Header from '../../header/headerContainer';
import FooterPlaylist from '../../footerPlaylist/footerPlaylistContainer';
import styles from './primaryLayout.less';
import FlagAudioModal from '../../flag/flagAudioModalContainer';
import FlagCommentModal from '../../flag/flagCommentModalContainer';
import PlaylistModal from '../../playlist/playlistModalContainer';
import CookieNotice from '../../legal/cookieNoticeContainer';
import PrimaryLayoutErrorBoundary from './primaryLayoutErrorBoundary';

const PrimaryLayout = ({ children, user, loginProviders }) => {
  const isAuthorized = user !== null;

  return (
    <PrimaryLayoutErrorBoundary>
      <Account loginProviders={loginProviders} />
      <Header user={user} />
      <div className={styles.main}>
        {children}
      </div>
      <FlagAudioModal isAuthorized={isAuthorized} />
      <FlagCommentModal isAuthorized={isAuthorized} />
      <PlaylistModal isAuthorized={isAuthorized} />
      <FooterPlaylist />
      <CookieNotice />
    </PrimaryLayoutErrorBoundary>
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
