import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Account from '../../account/account';
import Header from '../../header/headerContainer';
import FooterPlaylist from '../../footerPlaylist/footerPlaylistContainer';
import styles from './primaryLayout.less';
import FlagAudioModal from '../../flag/flagAudioModalContainer';
import FlagCommentModal from '../../flag/flagCommentModalContainer';
import CookieNotice from '../../legal/cookieNoticeContainer';
import PrimaryLayoutErrorBoundary from './primaryLayoutErrorBoundary';
import DisplayType from '../../shared/displayType';

const PrimaryLayout = ({
  children,
  loginProviders,
}) => (
  <DisplayType>
    {(displayType) => {
      const displayTypeClassName = classnames(
        displayType.isMobile && 'mobile',
        displayType.isTablet && 'tablet',
        displayType.isDesktop && 'desktop',
      );

      return (
        <div className={displayTypeClassName}>
          <Account loginProviders={loginProviders} />
          <Header />
          <PrimaryLayoutErrorBoundary>
            <div className={styles.main}>
              {children}
            </div>
          </PrimaryLayoutErrorBoundary>
          <FlagAudioModal />
          <FlagCommentModal />
          <FooterPlaylist />
          <CookieNotice />
        </div>
      );
    }}
  </DisplayType>
);

PrimaryLayout.defaultProps = {
  children: null,
};

PrimaryLayout.propTypes = {
  children: PropTypes.node,
  loginProviders: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PrimaryLayout;
