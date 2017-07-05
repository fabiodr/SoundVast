import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './uploadActions';

const mockStore = configureStore([thunk]);
const store = mockStore({});
const audioMetadataBody = {
  audioFileMetadatas: {
    name: 'test',
    album: 'testAlbum',
  },
};

describe('uploadActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  afterEach(() => {
    expect.restoreSpies();
  });

  it('should fetch files metadata while uploading', () => {
    fetchMock.postOnce('/upload/upload', 200);
    fetchMock.postOnce('/upload/fetchFilesMetadata', audioMetadataBody);

    const files = [
      { name: 'test.mp3' },
    ];

    expect.spyOn(FormData.prototype, 'append');

    store.dispatch(actions.uploadAudioFiles(files)).then(() => {
      expect(fetchMock.called('/upload/fetchFilesMetadata')).toBe(true);
      expect(calledActions).toEqual([{
        type: 'ADD_AUDIO_FILES',
        audioFiles: audioMetadataBody.audioFileMetadatas,
      }]);
    });
  });

  it('should upload audio files', () => {
    fetchMock.postOnce('/upload/upload', 200);
    fetchMock.postOnce('/upload/fetchFilesMetadata', audioMetadataBody);

    const files = [
      { name: 'test.mp3' },
    ];

    expect.spyOn(FormData.prototype, 'append');

    store.dispatch(actions.uploadAudioFiles(files));
    expect(FormData.prototype.append).toHaveBeenCalledWith('files', files[0]);
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
      preview: 'localhost//test.jpg',
    };
    const index = 0;

    store.dispatch(actions.updateCoverImageFile(file, index));

    expect(calledActions).toEqual([
      {
        type: 'UPDATE_COVER_IMAGE_FILE',
        preview: file.preview,
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
