import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './socialLoginsActions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('socialLoginActions', () => {
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

    fetchMock.post('account/socialLogins', json);

    store.dispatch(actions.getSocialLogins()).then(() => {
      calledActions = store.getActions();

      expect(calledActions[0]).toEqual({
        type: 'GET_SOCIAL_LOGINS',
        ...json,
      });
    });
  });
});
