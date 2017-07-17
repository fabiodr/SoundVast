import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './actions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('socialLoginsActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should fetch social logins', () => {
    const json = {
      loginProviders: [{
        authenticationScheme: 'facebook',
        displayName: 'Facebook',
      }],
    };

    fetchMock.getOnce('/account/getSocialLogins', json);

    store.dispatch(actions.getSocialLogins()).then(() => {
      calledActions = store.getActions();

      expect(calledActions).toEqual([{
        type: 'GET_SOCIAL_LOGINS',
        ...json,
      }]);
    });
  });
});
