import React from 'react';
import PropTypes from 'prop-types';

import Logout from '../account/logout/logoutContainer';
import SoundVastLogoIcon from '../icons/logo';
import LegalIcon from '../icons/legal';
import styles from './header.less';
import Dropdown from '../shared/dropdown/dropdownContainer';
import Button from '../shared/button/button';
import ModalButton from '../shared/button/modalButtonContainer';
import Search from './search/searchContainer';
import HeaderGenreLink from './headerGenreLinkContainer';
import HeaderUploadLink from './headerUploadLink';
import HeaderTermsLink from './headerTermsLink';
import HeaderPrivacyLink from './headerPrivacyLink';
import HeaderImprintLink from './headerImprintLink';
import HeaderHomeLink from './headerHomeLink';

const Header = ({
  userName,
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
      {userName ? (
        <Dropdown
          titleCallback={onClick => (
            <Button className={styles.dropdownTitle} styleName="secondary" onClick={onClick}>
              {userName}
            </Button>
          )}
          className={styles.navButton}
        >
          <Logout />
        </Dropdown>)
        : [
          <ModalButton key={0} styleName="secondary" className={styles.navButton} modalId="login">
            Login
          </ModalButton>,
          <ModalButton key={1} styleName="secondary" className={styles.navButton} modalId="register">
            Register
          </ModalButton>]
      }
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
        <HeaderImprintLink />
      </Dropdown>
    </nav>
  </header>
);

Header.defaultProps = {
  userName: null,
};

Header.propTypes = {
  userName: PropTypes.string,
};

export default Header;
