import React from 'react';
import { Link } from 'react-router-dom';

import soundVastLogo from '../../images/soundvast-nav-logo.png';
import styles from './header.less';
import AuthorizedList from './authorizedList/authorizedListContainer';
import UnAuthorizedList from './unAuthorizedList/unAuthorizedListContainer';
import AdminList from './adminList/adminListContainer';
import LinkDropdown from '../shared/dropDown/linkDropdownContainer';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul>
        {/* <li>
          <Link to="/" className={styles.logoLink}>
            <img src={soundVastLogo} alt="SoundVast" />
          </Link>
        </li>
        <li>
          <Link to="filestream/filestreams">Audios</Link>
        </li>
        <li>
          <Link to="livestreams/livestream">Live Streams</Link>
        </li>
        <li>
          <Link to="uploadmain/upload">Upload</Link>
        </li> */}
      </ul>
      <ul>
        <AuthorizedList />
        <UnAuthorizedList />
        <li>
          <LinkDropdown title={<i className="fa fa-bars" />}>
            <ul>
              <li>
                <Link to="content/aboutus">About us</Link>
              </li>
              <li>
                <Link to="content/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="content/copyright">Copyright</Link>
              </li>
              <li>
                <Link to="content/termsofuse">Terms of Use</Link>
              </li>
              <AdminList />
            </ul>
          </LinkDropdown>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
