import React from 'react';
import PropTypes from 'prop-types';

import SoundVastSmallLogoIcon from '../icons/logoSmall';
import UserIcon from '../icons/user';
import UploadIcon from '../icons/upload';
import GenreIcon from '../icons/stack';
import styles from './header.less';
import Popups from '../shared/popup/popupsContainer';
import Search from './search/searchContainer';
import HeaderGenreLink from './headerGenreLinkContainer';
import HeaderUploadLink from './headerUploadLink';
import HeaderHomeLink from './headerHomeLink';
import Dropdown from '../shared/dropdown/dropdownContainer';
import Button from '../shared/button/button';
import Logout from '../account/logout/logoutContainer';
import HeaderTermsLink from './headerTermsLink';
import HeaderPrivacyLink from './headerPrivacyLink';
import UnAuthorizedList from './unAuthorizedList/unAuthorizedListContainer';

const MobileHeader = ({
  user,
}) => (
  <header className={styles.header}>
    <nav>
      <HeaderHomeLink>
        <SoundVastSmallLogoIcon className={styles.smallLogoIcon} />
      </HeaderHomeLink>
      <HeaderGenreLink title="Genres">
        <GenreIcon className={styles.genreIcon} />
      </HeaderGenreLink>
      <HeaderUploadLink title="Upload">
        <UploadIcon className={styles.uploadIcon} />
      </HeaderUploadLink>
      <Search
        className={styles.search}
      />
      <Dropdown
        titleCallback={onClick => (
          <Button title={user.userName} className={styles.dropdownTitle} styleName="secondary" onClick={onClick}>
            <UserIcon className={styles.userIcon} />
          </Button>
        )}
        className={styles.navButton}
      >
        <Logout />
        <UnAuthorizedList user={user} className={styles.navButton} />
        <HeaderTermsLink />
        <HeaderPrivacyLink />
      </Dropdown>
      <Popups />
    </nav>
  </header>
);

MobileHeader.defaultProps = {
  user: {},
};

MobileHeader.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
  }),
};

export default MobileHeader;
