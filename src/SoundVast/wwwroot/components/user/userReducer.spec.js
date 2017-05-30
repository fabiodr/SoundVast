import expect from 'expect';

import userReducer from './userReducer';

describe('userReducer', () => {
  it('should get user details', () => {
    const actionProps = {
      isAdmin: true,
      isLoggedIn: true,
      userName: 'Yoshimiii',
    };
    const userDetails = userReducer(null, {
      type: 'USER_DETAILS',
      ...actionProps,
    });

    expect(userDetails).toEqual(actionProps);
  });
});
