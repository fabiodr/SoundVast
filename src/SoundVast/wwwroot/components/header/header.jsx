import React from 'react';
import { Link } from 'found';
import PropTypes from 'prop-types';

import SoundVastLogo from '../icons/logo';
import MenuIcon from '../icons/menu';
import styles from './header.less';
import AuthorizedList from './authorizedList/authorizedListContainer';
import UnAuthorizedList from './unAuthorizedList/unAuthorizedListContainer';
import LinkDropdown from '../shared/dropDown/dropDownContainer';
import Popups from '../shared/popup/popupsContainer';
import ReviewIcon from '../icons/review';
import LinkButton from '../shared/button/linkButton';

const Header = ({ user }) => (
  <header className={styles.header}>
    <nav>
      <ul>
        <li>
          <LinkButton to="/" styleName="secondary" className={styles.logoLink}>
            <SoundVastLogo className={styles.logoIcon} />
          </LinkButton>
        </li>
        <li>
          <LinkButton to="/songs" styleName="secondary">Songs</LinkButton>
        </li>
        <li>
          <LinkButton to="/radios" styleName="secondary">Radios</LinkButton>
        </li>
        <li>
          <LinkButton to="/upload" styleName="secondary">Upload</LinkButton>
        </li>
      </ul>
      <ul>
        <LinkButton to="/review" styleName="secondary" className={styles.review}>
          <ReviewIcon className={styles.reviewIcon} />
        </LinkButton>
        <Popups />
        <AuthorizedList user={user} />
        <UnAuthorizedList user={user} />
        <li>
          <LinkDropdown title={<MenuIcon className={styles.menuIcon} />}>
            <ul>
              <li>
                <Link to="/legal">Legal</Link>
              </li>
            </ul>
          </LinkDropdown>
        </li>
      </ul>
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
