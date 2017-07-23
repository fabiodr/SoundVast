import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './actions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('accountActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should fetch user details', (done) => {
    const response = {
      isAdmin: true,
      isLoggedIn: true,
      userName: 'Yoshimiii',
    };

    fetchMock.getOnce('/account/getAccountDetails', response);

    store.dispatch(actions.getAccountDetails()).then(() => {
      expect(calledActions).toEqual([{
        type: 'GET_ACCOUNT_DETAILS',
        ...response,
      }]);
      done();
    });
  });
});
