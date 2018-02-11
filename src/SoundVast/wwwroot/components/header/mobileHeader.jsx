import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SoundVastSmallLogoIcon from '../icons/logoSmall';
import MenuIcon from '../icons/menu';
import styles from './header.less';
import UserButton from './userButton/userButtonContainer';
import UnAuthorizedList from './unAuthorizedList/unAuthorizedListContainer';
import Dropdown from '../shared/dropdown/dropdownContainer';
import Popups from '../shared/popup/popupsContainer';
import Button from '../shared/button/button';
import Search from './search/searchContainer';
import HeaderGenreLink from './headerGenreLinkContainer';
import HeaderUploadLink from './headerUploadLink';
import HeaderTermsLink from './headerTermsLink';
import HeaderPrivacyLink from './headerPrivacyLink';
import LinkButton from '../shared/button/linkButton';

const MobileHeader = ({
  user,
}) => (
  <header className={styles.header}>
    <nav>
      <LinkButton
        to="/"
        styleName="secondary"
        className={classnames(styles.navButton, styles.logoContainer)}
      >
        <SoundVastSmallLogoIcon className={styles.smallLogoIcon} />
      </LinkButton>
      <Search
        className={styles.search}
      />
      <Popups />
      <Dropdown
        titleCallback={onClick => (
          <Button className={styles.dropdownTitle} styleName="secondary" onClick={onClick}>
            <MenuIcon className={styles.menuIcon} />
          </Button>
        )}
        className={classnames(styles.navButton, styles.dropdown)}
      >
        <ul>
          <li>
            <UserButton user={user} className={styles.navButton} />
            <UnAuthorizedList user={user} className={styles.navButton} />
            <HeaderGenreLink />
            <HeaderUploadLink />
          </li>
          <li>
            <HeaderTermsLink />
            <HeaderPrivacyLink />
          </li>
        </ul>
      </Dropdown>
    </nav>
  </header>
);

MobileHeader.defaultProps = {
  user: null,
};

MobileHeader.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
  }),
};

export default MobileHeader;
