import React from "react";
import { connect } from "react-redux";

class UserDetail extends React.Component {
    createListItems(){
        return this.props.users.map((user) => {
            return (
                <li key={user.id} onClick={() => this.props.selectUser(user)}>{user.first}</li>
            );
        });
    }
    render() {
        return (
            <div>
                details: {this.props.user.first}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    }
}


export default connect(mapStateToProps)(UserDetail);