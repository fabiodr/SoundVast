import React from 'react';
import { Link } from 'found';
import PropTypes from 'prop-types';

import soundVastLogo from '../../images/soundvast-nav-logo.png';
import styles from './header.less';
import AuthorizedList from './authorizedList/authorizedListContainer';
import UnAuthorizedList from './unAuthorizedList/unAuthorizedListContainer';
import AdminList from './adminList/adminListContainer';
import LinkDropdown from '../shared/dropDown/dropDownContainer';

const Header = ({ user }) => (
  <header className={styles.header}>
    <nav>
      <ul>
        <li>
          <Link to="/" className={styles.logoLink}>
            <img src={soundVastLogo} alt="SoundVast" />
          </Link>
        </li>
        <li>
          <Link to="/songs">Songs</Link>
        </li>
        <li>
          <Link to="/radio">Radio</Link>
        </li>
        <li>
          <Link to="/upload">Upload</Link>
        </li>
      </ul>
      <ul>
        <AuthorizedList user={user} />
        <UnAuthorizedList />
        <li>
          <LinkDropdown title={<i className="fa fa-bars" />}>
            <ul>
              <li>
                <Link to="/content/aboutuUs">About us</Link>
              </li>
              <li>
                <Link to="/content/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/content/copyright">Copyright</Link>
              </li>
              <li>
                <Link to="/content/termsOfUse">Terms of Use</Link>
              </li>
              <AdminList />
            </ul>
          </LinkDropdown>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
};

export default Header;
