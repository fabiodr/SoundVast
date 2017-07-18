import expect from 'expect';

import profileReducer from './reducer';

describe('profileReducer', () => {
  it('should return defaultState if undefined', () => {
    const state = profileReducer(undefined, {
      type: 'NONE',
    });

    expect(state).toEqual({});
  });

  it('should set user uploads', () => {
    const actionProps = {
      userAudios: [{
        name: 'bubble.mp3',
      }],
    };
    const prevState = {
      test: 3,
    };

    const state = profileReducer(prevState, {
      type: 'SET_USER_UPLOADS',
      ...actionProps,
    });

    expect(state).toEqual({
      ...prevState,
      ...actionProps,
    });
  });
});
