import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

const actions = proxyquire('./uploadActions', {
  shortid: {
    generate: expect.createSpy().andReturn('testId'),
  },
  '../shared/polyfills/fetchProgress': expect.createSpy(),
});
const mockStore = configureStore([thunk]);
const store = mockStore({});
const audioMetadataBody = {
  audioFileMetadatas: [{
    name: 'test',
    album: 'testAlbum',
    id: 'testId',
  }],
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

  it('should fetch files metadata', () => {
    fetchMock.postOnce('/upload/fetchFilesMetadata', audioMetadataBody);

    const files = [
      { name: 'test.mp3' },
      { name: 'testTwo.mp3' },
    ];

    expect.spyOn(FormData.prototype, 'append');

    store.dispatch(actions.fetchFilesMetadata(files)).then(() => {
      expect(fetchMock.called('/upload/fetchFilesMetadata')).toBe(true);
      expect(calledActions).toEqual([{
        type: 'ADD_AUDIO_FILES',
        audioFiles: audioMetadataBody.audioFileMetadatas,
      }]);
    });
    files.forEach((file) => {
      expect(FormData.prototype.append).toHaveBeenCalledWith('files', file);
    });
  });

  it('should upload audio files', () => {
    fetchMock.postOnce('/upload/upload', 200);
    fetchMock.postOnce('/upload/fetchFilesMetadata', audioMetadataBody);

    const files = [
      { name: 'test.mp3' },
      { name: 'testTwo.mp3' },
    ];

    expect.spyOn(FormData.prototype, 'set');

    store.dispatch(actions.uploadAudioFiles(files));

    files.forEach((file) => {
      expect(FormData.prototype.set).toHaveBeenCalledWith('file', file);
      expect(fetchMock.called('/upload/fetchFilesMetadata')).toBe(true);
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
