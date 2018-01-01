import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SoundVastLogo from '../icons/logo';
import MenuIcon from '../icons/menu';
import styles from './header.less';
import UserButton from './userButton/userButtonContainer';
import UnAuthorizedList from './unAuthorizedList/unAuthorizedListContainer';
import Dropdown from '../shared/dropdown/dropdownContainer';
import Popups from '../shared/popup/popupsContainer';
import ReviewIcon from '../icons/review';
import LinkButton from '../shared/button/linkButton';
import Button from '../shared/button/button';
import Search from './search/searchContainer';

const Header = ({ user, searchOnFocus, searchOnBlur, searchExpanded }) => (
  <header className={classnames(styles.header)}>
    <nav>
      <LinkButton
        to="/"
        styleName="secondary"
        className={classnames(styles.navButton, styles.logoLink)}
      >
        <SoundVastLogo className={styles.logoIcon} />
      </LinkButton>
      <LinkButton to="/songs" styleName="secondary" className={styles.navButton}>Songs</LinkButton>
      <LinkButton to="/artists" styleName="secondary" className={styles.navButton}>Artists</LinkButton>
      <LinkButton to="/albums" styleName="secondary" className={styles.navButton}>Albums</LinkButton>
      <LinkButton to="/radios" styleName="secondary" className={styles.navButton}>Radios</LinkButton>
      <LinkButton to="/upload" styleName="secondary" className={styles.navButton}>Upload</LinkButton>
      <Search
        searchExpanded={searchExpanded}
        searchOnFocus={searchOnFocus}
        searchOnBlur={searchOnBlur}
        className={styles.search}
      />
      <UserButton user={user} className={styles.navButton} />
      <UnAuthorizedList user={user} className={styles.navButton} />
      <Popups />
      <LinkButton
        to="/review"
        styleName="secondary"
        className={styles.navButton}
        title="Review uploads. Help improve the site. Earn points."
      >
        <ReviewIcon className={styles.reviewIcon} />
      </LinkButton>
      <Dropdown
        titleCallback={onClick => (
          <Button className={styles.extraDropdownTitle} styleName="secondary" onClick={onClick}>
            <MenuIcon className={styles.menuIcon} />
          </Button>
        )}
        className={classnames(styles.navButton, styles.extraDropdown)}
      >
        <ul>
          <li>
            <LinkButton styleName="secondary" to="/copyright">Copyright</LinkButton>
            <LinkButton styleName="secondary" to="/termsAndConditions">Terms/Conditions</LinkButton>
            <LinkButton styleName="secondary" to="/privacyPolicy">Privacy</LinkButton>
          </li>
        </ul>
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
  searchOnFocus: PropTypes.func.isRequired,
  searchOnBlur: PropTypes.func.isRequired,
  searchExpanded: PropTypes.bool.isRequired,
};

export default Header;
