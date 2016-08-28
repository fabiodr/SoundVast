import React from "react";
import UserList from "../containers/user-list";
import UserDetail from  "../containers/user-detail";

const Test = () => (
    <div>
        Users: 
        <UserList />
        Active user details:
        <UserDetail />
    </div>
);

export default Test;