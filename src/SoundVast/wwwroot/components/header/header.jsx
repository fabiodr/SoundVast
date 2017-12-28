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
import EditIcon from '../icons/edit';

const Header = ({ user }) => (
  <header className={styles.header}>
    <nav>
      <ul>
        <li>
          <Link to="/" className={styles.logoLink}>
            <SoundVastLogo className={styles.logo} />
          </Link>
        </li>
        <li>
          <Link to="/songs">Songs</Link>
        </li>
        <li>
          <Link to="/radios">Radios</Link>
        </li>
        <li>
          <Link to="/upload">Upload</Link>
        </li>
      </ul>
      <ul>
        <Link to="/reviewSongs">
          <EditIcon className={styles.editIcon} />
        </Link>
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
