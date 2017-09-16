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
    const actionProps = {
      songs: [
        { name: 'bubble.mp3' },
        { name: 'kalimba.mp3' },
      ],
      hasMore: true,
    };
    const prevState = {
      songs: [
        { name: 'test.mp3' },
      ],
      test: 'test',
    };
    const state = songsReducer(prevState, {
      type: 'FETCH_SONGS',
      ...actionProps,
    });

    expect(state).toEqual({
      ...prevState,
      ...actionProps,
      songs: prevState.songs.concat(actionProps.songs),
    });
  });
});
