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

  it('should fetch music', () => {
    const json = {
      musicAudios: [
        { name: 'bubble.mp3' },
        { name: 'kalimba.mp3' },
      ],
    };

    fetchMock.getOnce('/music/getMusic', json);

    store.dispatch(actions.getMusic()).then(() => {
      expect(calledActions).toEqual([{
        type: 'GET_MUSIC',
        musicAudios: json.musicAudios,
      }]);
    });
  });
});
