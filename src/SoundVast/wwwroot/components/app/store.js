import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import user from '../user/userReducer';

const middleWare = applyMiddleware(thunk);
const reducers = combineReducers({
  user,
});

export default createStore(reducers, middleWare);
