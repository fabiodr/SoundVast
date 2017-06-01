import expect from 'expect';

import userReducer from './userReducer';

describe('userReducer', () => {
  it('should return defaultState if undefined', () => {
    const state = userReducer(undefined, {
      type: 'NONE',
    });

    expect(state).toEqual({
      isAdmin: false,
      isLoggedIn: false,
    });
  });

  it('should get user details', () => {
    const actionProps = {
      isAdmin: true,
      isLoggedIn: true,
      userName: 'Yoshimiii',
    };
    const state = userReducer(null, {
      type: 'GET_USER_DETAILS',
      ...actionProps,
    });

    expect(state).toEqual(actionProps);
  });
});
