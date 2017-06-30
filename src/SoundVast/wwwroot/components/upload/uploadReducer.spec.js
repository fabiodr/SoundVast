import expect from 'expect';

import uploadReducer from './uploadReducer';

describe('uploadReducer', () => {
  it('should return defaultState if undefined', () => {
    const state = uploadReducer(undefined, {
      type: 'NONE',
    });

    expect(state).toEqual({
      files: [],
    });
  });

  it('should add files to existing files', () => {
    const actionProps = {
      files: [{
        title: 'bubble.mp3',
      }],
    };
    const prevState = {
      files: [{
        title: 'test.mp3',
      }],
    };

    const state = uploadReducer(prevState, {
      type: 'ADD_FILES',
      ...actionProps,
    });

    expect(state).toEqual({
      files: [
        { title: 'test.mp3' },
        { title: 'bubble.mp3', key: 0 },
      ],
    });
  });

  it('should remove file', () => {
    const prevState = {
      files: [
        { title: 'test.mp3' },
        { title: 'testTwo.mp3' },
      ],
    };

    const state = uploadReducer(prevState, {
      type: 'REMOVE_FILE',
      index: 0,
    });

    expect(state.files.length).toBe(1);
  });
});
