import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './userActions';

const mockStore = configureStore([thunk]);

describe('userActions', () => {
  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should fetch user details', () => {
    const store = mockStore({});
    const json = {
      isAdmin: true,
      isLoggedIn: true,
      userName: 'Yoshimiii',
    };

    fetchMock.post('account/userdetails', json);

    store.dispatch(actions.getUserDetails()).then(() => {
      const calledActions = store.getActions();

      expect(calledActions[0]).toEqual({
        type: 'USER_DETAILS',
        ...json,
      });
    });
  });
});
