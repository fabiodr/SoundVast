import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './actions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('genreActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should fetch music genres', () => {
    const response = {
      musicGenres: [
        { name: 'metal' },
        { name: 'rock' },
      ],
    };

    fetchMock.getOnce('/genre/getMusicGenres', response);

    store.dispatch(actions.getMusicGenres()).then(() => {
      expect(calledActions).toEqual([{
        type: 'GET_MUSIC_GENRES',
        ...response,
      }]);
    });
  });

  it('should fetch live stream genres', () => {
    const response = {
      liveStreamGenres: [
        { name: 'football' },
      ],
    };

    fetchMock.getOnce('/genre/getLiveStreamGenres', response);

    store.dispatch(actions.getLiveStreamGenres()).then(() => {
      expect(calledActions).toEqual([{
        type: 'GET_LIVE_STREAM_GENRES',
        ...response,
      }]);
    });
  });
});
