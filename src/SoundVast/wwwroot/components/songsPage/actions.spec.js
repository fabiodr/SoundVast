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
      songs: [
        { name: 'bubble.mp3' },
        { name: 'kalimba.mp3' },
      ],
      hasMore: true,
    };

    fetchMock.postOnce('/song/fetchSongs', response);

    store.dispatch(actions.fetchSongs()).then(() => {
      expect(calledActions).toEqual([{
        type: 'FETCH_SONGS',
        songs: response.songs,
        hasMore: response.hasMore,
      }]);
      done();
    });
  });

  it('should fetch song', (done) => {
    const id = 1;
    const response = {
      song: {
        name: 'bubble.mp3',
      },
    };

    fetchMock.postOnce('/song/fetchSong', response);

    store.dispatch(actions.fetchSong(id)).then(() => {
      expect(calledActions).toEqual([{
        type: 'FETCH_SONG',
        currentSong: response.song,
      }]);
      done();
    });
  });
});
