import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './actions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('musicActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should fetch music', (done) => {
    const response = {
      musicAudios: [
        { name: 'bubble.mp3' },
        { name: 'kalimba.mp3' },
      ],
      hasMore: true,
    };

    fetchMock.postOnce('/music/fetchMusic', response);

    store.dispatch(actions.fetchMusic()).then(() => {
      expect(calledActions).toEqual([{
        type: 'FETCH_MUSIC',
        musicAudios: response.musicAudios,
        hasMore: response.hasMore,
      }]);
      done();
    });
  });
});
