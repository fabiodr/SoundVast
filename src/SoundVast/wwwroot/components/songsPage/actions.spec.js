import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './actions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('songActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should fetch songs', (done) => {
    const response = {
      songs: [{
        id: 0,
        name: 'bubble',
        artist: 'kalimba',
        audioUrl: 'www.test.mp3',
        coverImageUrl: 'www.test.jpg',
        free: true,
      }],
      hasMore: true,
    };

    fetchMock.postOnce('/song/getSongs', response);

    store.dispatch(actions.fetchSongs()).then(() => {
      expect(calledActions[0]).toEqual({
        type: 'FETCH_SONGS',
        songs: response.songs,
        hasMore: response.hasMore,
      });
      done();
    });
  });

  it('should rate the song', (done) => {
    const id = 0;
    const liked = true;

    fetchMock.postOnce('/song/rateSong', '200');

    store.dispatch(actions.rateSong(id, liked)).then(() => {
      expect(calledActions[0]).toEqual({
        type: 'RATE_SONG',
        id,
        liked,
      });
      done();
    });
  });
});
