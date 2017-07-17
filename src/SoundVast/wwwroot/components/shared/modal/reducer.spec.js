import expect from 'expect';

import modalReducer from './reducer';

describe('modalReducer', () => {
  it('should return defaultState if undefined', () => {
    const state = modalReducer(undefined, {
      type: 'NONE',
    });

    expect(state).toEqual({});
  });

  it('should handle showing the modal', () => {
    const id = 'test';
    const state = modalReducer(null, {
      type: 'SHOW_MODAL',
      id,
    });

    expect(state).toEqual({
      currentModal: id,
    });
  });

  it('should handle hiding the modal', () => {
    const state = modalReducer(null, {
      type: 'HIDE_MODAL',
    });

    expect(state).toEqual({
      currentModal: null,
    });
  });
});
