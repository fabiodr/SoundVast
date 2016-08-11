import React from "react";
import { Link } from "react-router";
import reqwest from "reqwest";

import Nav from "../components/layout/Nav"
import Footer from "../components/layout/Footer";
import Auth from "../modules/Auth"

export default class Layout extends React.Component {
    constructor(){
        super();

        this.updateAuth = this.updateAuth.bind(this);
        this.state = { 
            loggedIn: Auth.loggedIn()
         };
    }
    getCurrentUser(){
        var component = this;

        reqwest({
            url: "account/getcurrentuserdetails", 
            method: "post",
            success: function (data) {
                component.setState(
                { 
                    isAuthenticated: data.isAuthenticated,
                    isAdmin: data.isAdmin,
                    userName: data.userName
                });
            }
        });
    }
    updateAuth(loggedIn){
        this.setState({
            loggedIn
        })
    }
    componentDidMount(){
        this.getCurrentUser();
    }
    componentWillMount(){
        Auth.onChange = this.updateAuth;
        Auth.login();
    }
    render(){
        const testStyle = {
            marginTop: "200px"
        }

        return (
            <div>       
                <Nav isAuthenticated={this.state.isAuthenticated} isAdmin={this.state.isAdmin} userName={this.state.userName}></Nav> 
                <div style={testStyle}>
                    <ul>
                    <li>
                        { this.state.loggedIn ? (
                        <Link to="/logout">Log out</Link>
                        ) : (
                        <Link to="/login">Sign in</Link>
                        )}
                    </li>
                    <li><Link to="/dashboard">Dashboard</Link> (authenticated)</li>
                    </ul>
                    {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
