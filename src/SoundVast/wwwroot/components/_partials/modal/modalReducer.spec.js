import expect from 'expect';

import modalReducer from './modalReducer';

describe('modalReducer', () => {
  it('should return defaultState if undefined', () => {
    const state = modalReducer(undefined, {
      type: 'NONE',
    });

    expect(state).toEqual({});
  });

  it('should get current modal to show', () => {
    const id = 'test';
    const state = modalReducer(null, {
      type: 'SHOW_MODAL',
      id,
    });

    expect(state).toEqual({
      currentModal: id,
    });
  });
});
