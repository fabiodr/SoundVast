import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {loadUserDetails} from "./appActions";
import Nav from "./Nav";
import FooterPlayer from "./FooterPlayer";
import TestPlayer from "./TestPlayer";
import Body from "./Body";

class AppContainer extends React.Component {
    componentDidMount(){
        this.props.loadUserAuthDetails();
    }
    render() {
        return (
            <div style={{height: "100%"}}>{/*Remove Style*/}
                {/*<Nav isAuthenticated={this.props.isAuthenticated} isAdmin={this.props.isAdmin} userName={this.props.userName} />
                <Body />*/}
                <FooterPlayer />
                <TestPlayer />
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