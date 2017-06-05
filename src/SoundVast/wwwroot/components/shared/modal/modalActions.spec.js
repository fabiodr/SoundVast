import expect from 'expect';
import configureStore from 'redux-mock-store';

import * as actions from './modalActions';

const mockStore = configureStore();
const store = mockStore({});

describe('modalActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  it('should show modal', () => {
    const id = 'test';

    store.dispatch(actions.showModal(id));

    expect(calledActions).toEqual([
      {
        type: 'SHOW_MODAL',
        id,
      },
    ]);
  });

  it('should hide modal', () => {
    store.dispatch(actions.hideModal());

    expect(calledActions).toEqual([
      {
        type: 'HIDE_MODAL',
      },
    ]);
  });
});
