import expect from 'expect';

import popupReducer from './popupReducer';

describe('popupReducer', () => {
  it('should return defaultState if undefined', () => {
    const state = popupReducer(undefined, {
      type: 'NONE',
    });

    expect(state).toEqual({});
  });

  it('should handle showing the popup', () => {
    const id = 'test';
    const text = 'Successfully logged in!';
    const state = popupReducer(null, {
      type: 'SHOW_TEXT_POPUP',
      id,
      text,
    });

    expect(state).toEqual({
      currentPopup: id,
      text,
    });
  });

  it('should handle hiding the popup', () => {
    const state = popupReducer(null, {
      type: 'HIDE_POPUP',
    });

    expect(state).toEqual({
      currentPopup: null,
    });
  });
});
