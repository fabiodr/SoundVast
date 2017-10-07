import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as jPlayers } from 'react-jplayer';
import { reducer as jPlaylists } from 'react-jplaylist';

import account from '../../account/reducer';
import profile from '../../user/profile/reducer';
import socialLogins from '../../account/login/socialLogins/reducer';
import modal from '../../shared/modal/reducer';
import popup from '../../shared/popup/reducer';
import form from '../../shared/form/reducer';
import upload from '../../upload/reducer';
import genre from '../../genre/reducer';
import music from '../../songs/reducer';

const middleWare = applyMiddleware(thunk);
const reducers = combineReducers({
  jPlayers,
  jPlaylists,
  account,
  profile,
  socialLogins,
  modal,
  form,
  popup,
  upload,
  genre,
  music,
});

export default createStore(reducers, middleWare);
