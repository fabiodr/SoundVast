import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {loadUserDetails} from "./appActions";
import Nav from "./Nav";
import FooterContainer from "./FooterContainer";
import Body from "./Body";

class AppContainer extends React.Component {
    componentDidMount(){
        this.props.loadUserAuthDetails();
    }
    render() {
        return (
            <div style={{height: "100%"}}>{/*Remove Style*/}
                <Nav isAuthenticated={this.props.isAuthenticated} isAdmin={this.props.isAdmin} userName={this.props.userName} />
                <Body />
                <FooterContainer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        app: state.app
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({loadUserAuthDetails: loadUserDetails}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);