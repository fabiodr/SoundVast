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

  it('should fetch next songs', (done) => {
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

    fetchMock.getOnce('/song/getSongs?current=0&amount=30', response);

    store.dispatch(actions.fetchNextSongs()).then(() => {
      expect(calledActions[0]).toEqual({
        type: 'FETCH_NEXT_SONGS',
        songs: response.songs,
        hasMore: response.hasMore,
      });
      done();
    });
  });

  it('should rate song', (done) => {
    const response = {
      rating: {
        liked: true,
      },
    };

    fetchMock.postOnce('/rating/rateAudio', response);

    store.dispatch(actions.rateSong()).then(() => {
      expect(calledActions[0]).toEqual({
        type: 'RATE_SONG',
        rating: response.rating,
      });
      done();
    });
  });
});
