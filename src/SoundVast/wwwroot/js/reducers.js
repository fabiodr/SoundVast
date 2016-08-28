import {combineReducers} from "redux";
import appReducer from "./app/appReducer";
import audioReducer from "./audio/audioReducer";

export default combineReducers({
    app: appReducer,
    audio: audioReducer
});