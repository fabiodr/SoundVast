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
import ModalButton from '../shared/button/modalButtonContainer';

const MobileHeader = ({
  userName,
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
          <Button title={userName} className={styles.dropdownTitle} styleName="secondary" onClick={onClick}>
            <UserIcon className={styles.userIcon} />
          </Button>
        )}
        className={styles.navButton}
      >
        {userName ? <Logout /> : [
          <ModalButton key={0} modalId="login">Login</ModalButton>,
          <ModalButton key={1} modalId="register">Register</ModalButton>,
        ]}
        <HeaderTermsLink />
        <HeaderPrivacyLink />
      </Dropdown>
      <Popups />
    </nav>
  </header>
);

MobileHeader.defaultProps = {
  userName: null,
};

MobileHeader.propTypes = {
  userName: PropTypes.string,
};

export default MobileHeader;
