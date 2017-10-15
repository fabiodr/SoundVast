import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as jPlayers } from 'react-jplayer';
import { reducer as jPlaylists } from 'react-jplaylist';
import { reducer as form } from 'redux-form';
import found from 'found/lib/foundReducer';
import FarceActions from 'farce/lib/Actions';
import BrowserProtocol from 'farce/lib/BrowserProtocol';
import createHistoryEnhancer from 'farce/lib/createHistoryEnhancer';
import queryMiddleware from 'farce/lib/queryMiddleware';
import createMatchEnhancer from 'found/lib/createMatchEnhancer';
import Matcher from 'found/lib/Matcher';

import routeConfig from '../routing/routeConfig';
import account from '../../account/reducer';
import profile from '../../user/profile/reducer';
import socialLogins from '../../account/login/socialLogins/reducer';
import modal from '../../shared/modal/reducer';
import popup from '../../shared/popup/reducer';
import upload from '../../upload/reducer';
import genre from '../../genre/reducer';
import music from '../../songs/reducer';

const historyEnhancer = createHistoryEnhancer({
  protocol: new BrowserProtocol(),
  middlewares: [queryMiddleware],
});

const matcherEnhancer = createMatchEnhancer(
  new Matcher(routeConfig),
);

const middleWare = compose(
  applyMiddleware(thunk),
  historyEnhancer,
  matcherEnhancer,
);

const reducers = combineReducers({
  found,
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

const store = createStore(reducers, middleWare);

store.dispatch(FarceActions.init());

export default store;
