import React from "react";
import { Link } from "react-router";

export default class Nav extends React.Component {
    renderDropdownBasedOnAuthentication(){
        if (this.props.isAuthenticated) {  
            return (
                <li>
                    <div class="nav-dropdown">
                        <span>{this.props.userName}</span>
                        <ul class="menu">
                            <li>
                                <Link to="profile" class="nav-link profile">Profile</Link>
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
        }
        else {
            return [
                <li key={1}>
                    <Link to="account/login" class="nav-link popup-link" id="login-link">Login</Link>
                </li>,
                <li key={2}>
                    <Link to="account/register" class="nav-link popup-link" id="register-link">Register</Link>
                </li>
            ];
         }
    }
    renderDropdownIfAdmin(){
        if (this.props.isAdmin) {
            return [
                <li key={1}>
                    <Link to="rolesadmin/index" class="nav-link admin-roles">Admin Roles</Link>
                </li>,
                <li key={2}>
                    <Link to="usersadmin/index" class="nav-link admin-user">Admin User</Link>
                </li>,
                <li key={3}>
                    <Link to="filestream/reportfilestreams" class="nav-link report-file-stream">Report FileStreams</Link>
                </li>
            ];
        }
    }
    render(){
        return (
          <div class="row">
            <div class="col-xs-12">
                <header>
                    <div class="wrapper container">
                        <nav>
                            <ul class="outer pull-left">
                                <li>
                                    <Link to="/" class="nav-link logo">
                                        <img src="images/soundvast-nav-logo.png" alt="SoundVast" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="filestream/filestreams" class="nav-link audio">Audios</Link>
                                </li>
                                <li>
                                    <Link to="livestreams/livestream" class="nav-link live-stream">Live Streams</Link>
                                </li>
                                <li>
                                    <Link to="uploadmain/upload" class="nav-link upload">Upload</Link>
                                </li>
                                <li>                                
                                    <Search></Search>
                                </li>
                            </ul>
                            <ul class="outer pull-right">
                                { this.renderDropdownBasedOnAuthentication() }
                                <li>
                                    <div class="nav-dropdown">
                                        <span><i class="fa fa-bars"></i></span>
                                        <ul class="menu">
                                            <li>
                                                <Link to="content/aboutus" class="nav-link about-us">About us</Link>
                                            </li>
                                            <li>
                                                <Link to="content/privacy" class="nav-link privacy">Privacy</Link>
                                            </li>
                                            <li>
                                                <Link to="content/copyright" class="nav-link copyright">Copyright</Link>
                                            </li>
                                            <li>
                                                <Link to="content/termsofuse" class="nav-link terms-of-use">Terms of Use</Link>
                                            </li>
                                            { this.renderDropdownIfAdmin() }                                      
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

class Search extends React.Component{
    render(){
        return (
            <form action="search/search" method="get" id="search">
                <i class="fa fa-search"></i>
                <input type="search" id="search" name="search" placeholder="Search" />

                <div id="filter">
                    <span><strong>Syntax</strong></span>
                </div>
            </form>
        );
    }
}