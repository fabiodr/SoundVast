import expect from 'expect';

import musicReducer from './reducer';

describe('musicReducer', () => {
  it('should return defaultState if undefined', () => {
    const state = musicReducer(undefined, {
      type: 'NONE',
    });

    expect(state).toEqual({
      musicAudios: [],
      hasMore: true,
    });
  });

  it('should get music', () => {
    const actionProps = {
      musicAudios: [
        { name: 'bubble.mp3' },
        { name: 'kalimba.mp3' },
      ],
      hasMore: true,
    };
    const prevState = {
      test: 'test',
    };
    const state = musicReducer(prevState, {
      type: 'FETCH_MUSIC',
      ...actionProps,
    });

    expect(state).toEqual({
      ...prevState,
      ...actionProps,
    });
  });
});
