import expect from 'expect';

import socialLoginsReducer from './socialLoginsReducer';

describe('socialLoginsReducer', () => {
  it('should return defaultState if undefined', () => {
    const state = socialLoginsReducer(undefined, {
      type: 'NONE',
    });

    expect(state).toEqual({});
  });

  it('should get social logins', () => {
    const actionProps = {
      loginProviders: [{
        authenticationScheme: 'facebook',
        displayName: 'Facebook',
      }],
    };
    const state = socialLoginsReducer(null, {
      type: 'GET_SOCIAL_LOGINS',
      ...actionProps,
    });

    expect(state).toEqual(actionProps);
  });
});
