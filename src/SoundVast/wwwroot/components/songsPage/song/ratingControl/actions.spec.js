import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './actions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('ratingControlActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  afterEach(() => {
    fetchMock.reset().restore();
    expect.restoreSpies();
  });

  it('should rate the song', (done) => {
    const songId = 0;

    fetchMock.postOnce('/song/rateSong', '200');

    store.dispatch(actions.rateSong(songId, true)).then(() => {
      expect(calledActions[0]).toEqual({
        type: 'RATE_SONG',
        songId,
      });
      done();
    });
  });
});
