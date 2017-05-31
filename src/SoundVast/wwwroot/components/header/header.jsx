import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.less';
import AuthorizedList from './authorizedList/authorizedListContainer';
import UnAuthorizedList from './unAuthorizedList/unAuthorizedListContainer';
import AdminList from './adminList/adminListContainer';

const Header = () => (
  <div className="row">
    <div className="col-xs-12">
      <header className={styles.header}>
        <div className="wrapper container">
          <nav>
            <ul className={`${styles.outerList} pull-left`}>
              <li>
                <Link to="/">
                  <img src="images/soundvast-nav-logo.png" alt="SoundVast" />
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
              </li>
            </ul>
            <ul className={`${styles.outerList} pull-right`}>
              <AuthorizedList />
              <UnAuthorizedList />
              <li>
                <div className={styles.navDropdown}>
                  <span><i className="fa fa-bars" /></span>
                  <ul className={styles.navDropdownList}>
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
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  </div>
);

export default Header;
