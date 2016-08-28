import { combineReducers } from "redux";
import userReducer from "./users";
import activeUserReducer from "./active-user";

const allReducers = combineReducers({
    users: userReducer,
    activeUser: activeUserReducer
});

export default allReducers;