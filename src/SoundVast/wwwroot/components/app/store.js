import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import user from '../user/userReducer';
import socialLogins from '../user/login/socialLogins/socialLoginsReducer';
import modal from '../shared/modal/modalReducer';
import form from '../shared/form/formReducer';

const middleWare = applyMiddleware(thunk);
const reducers = combineReducers({
  user,
  socialLogins,
  modal,
  form,
});

export default createStore(reducers, middleWare);
