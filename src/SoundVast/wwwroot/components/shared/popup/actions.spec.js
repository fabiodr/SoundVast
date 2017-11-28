import expect from 'expect';
import configureStore from 'redux-mock-store';

import * as actions from './actions';

const mockStore = configureStore();
const store = mockStore({});

describe('popupActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  it('should show text popup', () => {
    const text = 'Successfully logged in!';

    store.dispatch(actions.showPopup(text));

    expect(calledActions).toEqual([
      {
        type: 'SHOW_TEXT_POPUP',
        id: 'textPopup',
        text,
      },
    ]);
  });

  it('should show generic error popup', () => {
    store.dispatch(actions.showGenericErrorPopup());

    expect(calledActions).toEqual([
      {
        type: 'SHOW_TEXT_POPUP',
        id: 'textPopup',
        text: 'An error occured. Please try refreshing the page.',
      },
    ]);
  });

  it('should hide popup', () => {
    store.dispatch(actions.hidePopup());

    expect(calledActions).toEqual([
      {
        type: 'HIDE_POPUP',
      },
    ]);
  });
});
