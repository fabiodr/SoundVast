import expect from 'expect';

import accountReducer from './reducer';

describe('accountReducer', () => {
  it('should return defaultState if undefined', () => {
    const state = accountReducer(undefined, {
      type: 'NONE',
    });

    expect(state).toEqual({});
  });

  it('should get account details', () => {
    const actionProps = {
      isAdmin: true,
      isLoggedIn: true,
      userName: 'Yoshimiii',
    };
    const state = accountReducer(null, {
      type: 'GET_ACCOUNT_DETAILS',
      ...actionProps,
    });

    expect(state).toEqual(actionProps);
  });
});
