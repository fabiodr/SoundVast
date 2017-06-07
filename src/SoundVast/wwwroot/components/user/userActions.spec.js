import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './userActions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('userActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should fetch user details', () => {
    const json = {
      isAdmin: true,
      isLoggedIn: true,
      userName: 'Yoshimiii',
    };

    fetchMock.getOnce('/account/userDetails', json);

    store.dispatch(actions.getUserDetails()).then(() => {
      expect(calledActions).toEqual([{
        type: 'GET_USER_DETAILS',
        ...json,
      }]);
    });
  });
});
