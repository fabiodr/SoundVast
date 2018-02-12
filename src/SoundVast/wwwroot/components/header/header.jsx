import React from 'react';
import PropTypes from 'prop-types';

import SoundVastLogoIcon from '../icons/logo';
import LegalIcon from '../icons/legal';
import styles from './header.less';
import UnAuthorizedList from './unAuthorizedList/unAuthorizedListContainer';
import Dropdown from '../shared/dropdown/dropdownContainer';
import Popups from '../shared/popup/popupsContainer';
import Button from '../shared/button/button';
import Search from './search/searchContainer';
import HeaderGenreLink from './headerGenreLinkContainer';
import HeaderUploadLink from './headerUploadLink';
import HeaderTermsLink from './headerTermsLink';
import HeaderPrivacyLink from './headerPrivacyLink';
import HeaderHomeLink from './headerHomeLink';
import Logout from '../account/logout/logoutContainer';

const Header = ({
  user,
}) => (
  <header className={styles.header}>
    <nav>
      <HeaderHomeLink>
        <SoundVastLogoIcon className={styles.logoIcon} />
      </HeaderHomeLink>
      <HeaderGenreLink>Genres</HeaderGenreLink>
      <HeaderUploadLink>Upload</HeaderUploadLink>
      <Search
        className={styles.search}
      />
      <Dropdown
        titleCallback={onClick => (
          <Button className={styles.dropdownTitle} styleName="secondary" onClick={onClick}>
            {user.userName}
          </Button>
        )}
        className={styles.navButton}
      >
        <Logout />
        <UnAuthorizedList user={user} className={styles.navButton} />
      </Dropdown>
      <Popups />
      <Dropdown
        titleCallback={onClick => (
          <Button title="Legal" className={styles.dropdownTitle} styleName="secondary" onClick={onClick}>
            <LegalIcon className={styles.legalIcon} />
          </Button>
        )}
        className={styles.navButton}
      >
        <HeaderTermsLink />
        <HeaderPrivacyLink />
      </Dropdown>
    </nav>
  </header>
);

Header.defaultProps = {
  user: null,
};

Header.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
  }),
};

export default Header;
