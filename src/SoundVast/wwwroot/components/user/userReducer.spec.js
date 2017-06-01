import expect from 'expect';

import userReducer from './userReducer';

describe('userReducer', () => {
  it('should return defaultState if undefined', () => {
    const userDetails = userReducer(undefined, {
      type: 'NONE',
    });

    expect(userDetails).toEqual({
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
    const userDetails = userReducer(null, {
      type: 'GET_USER_DETAILS',
      ...actionProps,
    });

    expect(userDetails).toEqual(actionProps);
  });
});
