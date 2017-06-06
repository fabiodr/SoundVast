import expect from 'expect';
import configureStore from 'redux-mock-store';

import * as actions from './popupActions';

const mockStore = configureStore();
const store = mockStore({});

describe('popupActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  it('should show popup', () => {
    const id = 'test';

    store.dispatch(actions.showPopup(id));

    expect(calledActions).toEqual([
      {
        type: 'SHOW_POPUP',
        id,
      },
    ]);
  });

  it('should hide modpopupal', () => {
    store.dispatch(actions.hidePopup());

    expect(calledActions).toEqual([
      {
        type: 'HIDE_POPUP',
      },
    ]);
  });
});
