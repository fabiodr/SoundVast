import expect from 'expect';

import songsReducer from './reducer';

describe('songsReducer', () => {
  it('should return defaultState if undefined', () => {
    const state = songsReducer(undefined, {
      type: 'NONE',
    });

    expect(state).toEqual({
      songs: [],
      hasMore: true,
    });
  });

  it('should fetch songs', () => {
    const ratings = [
      { id: 0, liked: true, audioId: 0 },
    ];
    const prevState = {
      songs: [
        { id: 0, name: 'test.mp3', ratings },
      ],
      test: 'test',
    };
    const actionProps = {
      songs: [
        { id: 1, name: 'bubble.mp3' },
      ],
      hasMore: true,
    };
    const state = songsReducer(prevState, {
      type: 'FETCH_SONGS',
      ...actionProps,
    });

    expect(state).toEqual({
      ...prevState,
      ...actionProps,
      songs: [
        { id: 0, name: 'test.mp3', ratings: [0] },
        { id: 1, name: 'bubble.mp3' },
      ],
      ratings: {
        0: { id: 0, liked: true, audioId: 0 },
      },
    });
  });

  it('should rate song', () => {
    const prevState = {
      ratings: {
        0: {
          liked: false,
        },
      },
      test: 'test',
    };
    const rating = {
      id: 0,
      liked: true,
    };
    const state = songsReducer(prevState, {
      type: 'RATE_SONG',
      rating,
    });

    expect(state).toEqual({
      ...prevState,
      ratings: {
        0: rating,
      },
    });
  });
});
