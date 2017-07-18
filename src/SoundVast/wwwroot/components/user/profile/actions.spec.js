import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './actions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('profileActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should get user uploads', () => {
    const json = {
      userAudios: [],
    };
    fetchMock.getOnce('/profile/getUserUploads', json);

    store.dispatch(actions.getUserUploads()).then(() => {
      expect(calledActions).toEqual([{
        type: 'SET_USER_UPLOADS',
        userAudios: json.userAudios,
      }]);
    });
  });
});
