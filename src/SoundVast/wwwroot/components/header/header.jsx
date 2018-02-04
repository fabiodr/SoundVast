import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SoundVastLogo from '../icons/logo';
import LegalIcon from '../icons/legal';
import styles from './header.less';
import UserButton from './userButton/userButtonContainer';
import UnAuthorizedList from './unAuthorizedList/unAuthorizedListContainer';
import Dropdown from '../shared/dropdown/dropdownContainer';
import Popups from '../shared/popup/popupsContainer';
import LinkButton from '../shared/button/linkButton';
import Button from '../shared/button/button';
import Search from './search/searchContainer';

const Header = ({
  user,
  genresLocationInformation,
}) => (
  <header className={classnames(styles.header)}>
    <nav>
      <LinkButton
        to="/"
        styleName="secondary"
        className={classnames(styles.navButton, styles.logoLink)}
      >
        <SoundVastLogo className={styles.logoIcon} />
      </LinkButton>
      <LinkButton to="/radios" styleName="secondary" className={styles.navButton}>Radios</LinkButton>
      <LinkButton to={genresLocationInformation} styleName="secondary" className={styles.navButton}>Genres</LinkButton>
      <LinkButton to="/upload" styleName="secondary" className={styles.navButton}>Upload</LinkButton>
      <Search
        className={styles.search}
      />
      <UserButton user={user} className={styles.navButton} />
      <UnAuthorizedList user={user} className={styles.navButton} />
      <Popups />
      <Dropdown
        titleCallback={onClick => (
          <Button className={styles.legalDropdownTitle} styleName="secondary" onClick={onClick}>
            <LegalIcon className={styles.menuIcon} />
          </Button>
        )}
        className={classnames(styles.navButton, styles.legalDropdown)}
      >
        <ul>
          <li>
            <LinkButton styleName="secondary" to="/termsAndConditions">Terms/Conditions</LinkButton>
            <LinkButton styleName="secondary" to="/privacyPolicy">Privacy</LinkButton>
          </li>
        </ul>
      </Dropdown>
      <div className={styles.copyrightNotice}>
        © {new Date().getFullYear()} SoundVast. All Rights Reserved.
      </div>
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
  genresLocationInformation: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
