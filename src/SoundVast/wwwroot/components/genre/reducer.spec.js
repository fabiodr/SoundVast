import expect from 'expect';

import genreReducer from './reducer';

describe('genreReducer', () => {
  it('should return defaultState if undefined', () => {
    const state = genreReducer(undefined, {
      type: 'NONE',
    });

    expect(state).toEqual({
      musicGenres: [],
      liveStreamGenres: [],
    });
  });

  it('should get music genres', () => {
    const actionProps = {
      musicGenres: [
        { name: 'metal' },
        { name: 'rock' },
      ],
    };
    const state = genreReducer(null, {
      type: 'GET_MUSIC_GENRES',
      ...actionProps,
    });

    expect(state).toEqual(actionProps);
  });

  it('should get live stream genres', () => {
    const actionProps = {
      liveStreamGenres: [
        { name: 'football' },
      ],
    };
    const state = genreReducer(null, {
      type: 'GET_LIVE_STREAM_GENRES',
      ...actionProps,
    });

    expect(state).toEqual(actionProps);
  });
});
