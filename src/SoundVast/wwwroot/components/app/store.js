import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';

import user from '../user/userReducer';
import socialLogins from '../user/login/socialLogins/socialLoginsReducer';
import modal from '../shared/modal/modalReducer';
import popup from '../shared/popup/popupReducer';
import upload from '../upload/uploadReducer';
import genre from '../genre/genreReducer';

const middleWare = applyMiddleware(thunk);
const reducers = combineReducers({
  user,
  socialLogins,
  modal,
  form,
  popup,
  upload,
  genre,
});

export default createStore(reducers, middleWare);
