import expect from 'expect';

import musicReducer from './reducer';

describe('musicReducer', () => {
  it('should return defaultState if undefined', () => {
    const state = musicReducer(undefined, {
      type: 'NONE',
    });

    expect(state).toEqual({
      musicAudios: [],
    });
  });

  it('should get music', () => {
    const actionProps = {
      musicAudios: [
        { name: 'bubble.mp3' },
        { name: 'kalimba.mp3' },
      ],
    };
    const prevState = {
      test: 'test',
    };
    const state = musicReducer(prevState, {
      type: 'GET_MUSIC',
      ...actionProps,
    });

    expect(state).toEqual({
      ...prevState,
      ...actionProps,
    });
  });
});
