import expect from 'expect';

import genreReducer from './genreReducer';

describe('userReducer', () => {
  it('should return defaultState if undefined', () => {
    const state = genreReducer(undefined, {
      type: 'NONE',
    });

    expect(state).toEqual({
      genres: [],
    });
  });

  it('should get genres', () => {
    const actionProps = {
      genres: [
        { name: 'metal' },
        { name: 'rock' },
      ],
    };
    const state = genreReducer(null, {
      type: 'GET_GENRES',
      ...actionProps,
    });

    expect(state).toEqual(actionProps);
  });
});
