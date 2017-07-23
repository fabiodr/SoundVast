import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './actions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('uploadActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  afterEach(() => {
    expect.restoreSpies();
  });

  it('should remove audio file', () => {
    const index = 0;

    store.dispatch(actions.removeAudioFile(index));

    expect(calledActions).toEqual([
      {
        type: 'REMOVE_AUDIO_FILE',
        index,
      },
    ]);
  });

  it('should update cover image files', () => {
    const file = {
      preview: 'localhost//test.jpg',
    };
    const index = 0;

    store.dispatch(actions.updateCoverImageFile(file, index));

    expect(calledActions).toEqual([
      {
        type: 'UPDATE_COVER_IMAGE_FILE',
        file,
        index,
      },
    ]);
  });

  it('should remove cover image file', () => {
    const index = 0;
    store.dispatch(actions.removeCoverImageFile(index));

    expect(calledActions).toEqual([
      {
        type: 'REMOVE_COVER_IMAGE_FILE',
        index,
      },
    ]);
  });
});
