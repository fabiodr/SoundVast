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

  it('should fetch genres', () => {
    const json = {
      genres: [
        { name: 'metal' },
        { name: 'rock' },
      ],
    };

    fetchMock.getOnce('/genre/getGenres', json);

    store.dispatch(actions.getGenres()).then(() => {
      expect(calledActions).toEqual([{
        type: 'GET_GENRES',
        ...json,
      }]);
    });
  });
});
