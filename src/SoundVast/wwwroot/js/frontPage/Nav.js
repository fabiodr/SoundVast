import React from "react";
import { Link } from "react-router";
import createFragment from "react-addons-create-fragment";

import Search from "./Search";

export default class Nav extends React.Component {
    render(){
        return (
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
                                <li>
                                    <Search></Search>
                                </li>
                            </ul>
                            <ul className="outer pull-right">
                                {
                                    this.props.isAuthenticated ? <AuthorizedDropdown userName={this.props.userName} />
                                                                : unAuthorizedDropdown()
                                }
                                <li>
                                    <div className="nav-dropdown">
                                        <span><i className="fa fa-bars"></i></span>
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
                                            {this.props.isAdmin ? adminDropdown() : null}
                                        </ul>
                                    </div>
                                    <div id="cover"></div>
                                    <div id="popup"></div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
             </div>
          </div>
        );
    }
}

const adminDropdown = () => (
    createFragment({
        role: <li><Link to="rolesadmin/index" className="nav-link admin-roles">Admin Roles</Link></li>,
        user: <li><Link to="usersadmin/index" className="nav-link admin-user">Admin User</Link></li>,
        reportedStreams: <li><Link to="filestream/reportfilestreams" className="nav-link report-file-stream">Report FileStreams</Link></li>
    })
);

const unAuthorizedDropdown = () => (
    createFragment({
        login: <li><Link to="account/login" className="nav-link popup-link" id="login-link">Login</Link></li>,
        register: <li><Link to="account/register" className="nav-link popup-link" id="register-link">Register</Link></li>
    })
);

const AuthorizedDropdown = (props) => (
    <li>
        <div className="nav-dropdown">
            <span>{props.userName}</span>
            <ul className="menu">
                <li>
                    <Link to="profile" className="nav-link profile">Profile</Link>
                </li>
                <li>
                    <form action="account/logout" name="logout-form" id="logout-form">
                        <input type="submit" value="Logout" />
                    </form>
                </li>
            </ul>
        </div>
    </li>
);
