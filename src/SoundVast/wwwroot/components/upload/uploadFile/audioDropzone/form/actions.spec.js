import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './actions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('uploadAudioFormActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  afterEach(() => {
    expect.restoreSpies();
  });

  it('should say which file is pending submit', () => {
    const index = 0;
    const isSubmitting = true;

    store.dispatch(actions.submitPending(index, isSubmitting));

    expect(calledActions).toEqual([
      {
        type: 'SUBMIT_PENDING',
        index,
        isSubmitting,
      },
    ]);
  });
});
