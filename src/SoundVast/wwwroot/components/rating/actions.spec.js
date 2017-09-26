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

  it('should rate the song', (done) => {
    const response = {
      rating: {
        id: 0,
        liked: true,
      },
    };
    const liked = true;

    fetchMock.postOnce('/rating/rateAudio', response);

    store.dispatch(actions.rateAudio(0, liked)).then(() => {
      expect(calledActions[0]).toEqual({
        type: 'RATE_SONG',
        rating: response.rating,
      });
      done();
    });
  });
});
