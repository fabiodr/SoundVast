import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';

import account from '../../account/reducer';
import profile from '../../user/profile/reducer';
import socialLogins from '../../account/login/socialLogins/reducer';
import modal from '../../shared/modal/reducer';
import popup from '../../shared/popup/reducer';
import upload from '../../upload/reducer';
import genre from '../../genre/reducer';
import songs from '../../songsPage/reducer';

const middleWare = applyMiddleware(thunk);
const reducers = combineReducers({
  account,
  profile,
  socialLogins,
  modal,
  form,
  popup,
  upload,
  genre,
  songs,
});

export default createStore(reducers, middleWare);
