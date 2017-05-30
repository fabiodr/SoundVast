import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './userActions';

const mockStore = configureStore([thunk]);

describe('userActions', () => {
  it('should fetch user details', () => {
    const store = mockStore({});
    const data = {
      isAdmin: true,
      isLoggedIn: true,
      userName: 'Yoshimiii',
    };

    store.dispatch(actions.getUserDetails()).o.success(data);
    const calledActions = store.getActions();

    expect(calledActions[0]).toEqual({
      type: 'USER_DETAILS',
      ...data,
    });
  });
});
