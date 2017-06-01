import expect from 'expect';

import socialLoginsReducer from './socialLoginsReducer';

describe('socialLoginsReducer', () => {
  it('should return defaultState if undefined', () => {
    const socialLoginDetails = socialLoginsReducer(undefined, {
      type: 'NONE',
    });

    expect(socialLoginDetails).toEqual({});
  });

  it('should get social logins', () => {
    const actionProps = {
      loginProviders: [{
        authenticationScheme: 'facebook',
        displayName: 'Facebook',
      }],
    };
    const socialLoginDetails = socialLoginsReducer(null, {
      type: 'GET_SOCIAL_LOGINS',
      ...actionProps,
    });

    expect(socialLoginDetails).toEqual(actionProps);
  });
});
