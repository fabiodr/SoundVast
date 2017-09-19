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
  });

  it('should like song', (done) => {
    const songId = 0;
    const response = {
      like: 22,
    };

    fetchMock.postOnce('/song/like', response);

    store.dispatch(actions.like(songId)).then(() => {
      expect(calledActions[0]).toEqual({
        type: 'LIKE_SONG',
        songId,
        likes: response.likes,
      });
      done();
    });
  });
});
