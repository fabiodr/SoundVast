import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './uploadActions';

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

  it('should upload audio files', () => {
    fetchMock.postOnce('/upload/upload', 200);

    const files = [
      { name: 'test.mp3' },
    ];

    expect.spyOn(FormData.prototype, 'append');

    store.dispatch(actions.uploadAudioFiles(files)).then(() => {
      expect(FormData.prototype.append).toHaveBeenCalledWith('files', files[0]);
      expect(calledActions).toEqual([{
        type: 'ADD_AUDIO_FILES',
        files,
      }]);
    });
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

  it('should add cover image files', () => {
    const file = {
      name: 'test.jpg',
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
