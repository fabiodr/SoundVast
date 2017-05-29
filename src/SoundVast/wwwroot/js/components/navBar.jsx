import React from 'react';
import { Link } from 'react-router';

const NavBar = () => (
  <div className="row">
    <div className="col-xs-12">
      <header>
        <div className="wrapper container">
          <nav>
            <ul className="outer pull-left">
              <li>
                <Link to="/" className="nav-link logo">
                  <img src="images/soundvast-nav-logo.png" alt="SoundVast" />
                </Link>
              </li>
              <li>
                <Link to="filestream/filestreams" className="nav-link audio">Audios</Link>
              </li>
              <li>
                <Link to="livestreams/livestream" className="nav-link live-stream">Live Streams</Link>
              </li>
              <li>
                <Link to="uploadmain/upload" className="nav-link upload">Upload</Link>
              </li>
            </ul>
            <ul className="outer pull-right">
              <li>
                <div className="nav-dropdown">
                  <span>
                    <i className="fa fa-bars" />
                  </span>
                  <ul className="menu">
                    <li>
                      <Link to="content/aboutus" className="nav-link about-us">About us</Link>
                    </li>
                    <li>
                      <Link to="content/privacy" className="nav-link privacy">Privacy</Link>
                    </li>
                    <li>
                      <Link to="content/copyright" className="nav-link copyright">Copyright</Link>
                    </li>
                    <li>
                      <Link to="content/termsofuse" className="nav-link terms-of-use">Terms of Use</Link>
                    </li>
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

export default NavBar;
