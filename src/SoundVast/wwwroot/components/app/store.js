import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import user from '../user/userReducer';
import socialLogins from '../user/login/socialLogins/socialLoginsReducer';
import modal from '../_partials/modal/modalReducer';

const middleWare = applyMiddleware(thunk);
const reducers = combineReducers({
  user,
  socialLogins,
  modal,
});

export default createStore(reducers, middleWare);
