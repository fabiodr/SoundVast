import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import user from '../user/userReducer';
import socialLogins from '../user/login/socialLogins/socialLoginsReducer';

const middleWare = applyMiddleware(thunk);
const reducers = combineReducers({
  user,
  socialLogins,
});

export default createStore(reducers, middleWare);
