import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
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
import modal from '../../shared/modal/reducer';
import popup from '../../shared/popup/reducer';
import upload from '../../upload/reducer';
import audio from '../../audio/reducer';
import jPlayers from './jPlayersReducer';
import normalizeBoolean from '../../shared/utilities/normalizeBoolean';

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
  modal,
  form,
  popup,
  upload,
  audio,
});

const showingSideBar = normalizeBoolean(localStorage.getItem('showingSideBar'));

const store = createStore(reducers, {
  audio: {
    showingSideBar: showingSideBar === null ? true : showingSideBar,
  },
}, middleWare);

store.dispatch(FarceActions.init());

export default store;
