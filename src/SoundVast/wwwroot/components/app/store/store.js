import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';

import account from '../../account/reducer';
import socialLogins from '../../account/login/socialLogins/reducer';
import modal from '../../shared/modal/reducer';
import popup from '../../shared/popup/reducer';
import upload from '../../upload/reducer';
import genre from '../../genre/reducer';

const middleWare = applyMiddleware(thunk);
const reducers = combineReducers({
  account,
  socialLogins,
  modal,
  form,
  popup,
  upload,
  genre,
});

export default createStore(reducers, middleWare);
