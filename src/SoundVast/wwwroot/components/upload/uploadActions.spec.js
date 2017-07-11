import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import proxyquire from 'proxyquire';
import fetchMock from 'fetch-mock';

import * as actions from './uploadActions';

proxyquire.noCallThru();

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

  it('should upload file', () => {
    const progressIndex = 0;
    fetchMock.postOnce('/upload/upload', 200);

    store.dispatch(actions.uploadFile({}, progressIndex)).then(() => {
      expect(calledActions).toContain({
        type: 'UPDATE_UPLOAD_PROGRESS',
        progressPercent: 100,
        index: progressIndex,
        message: 'Successfully uploaded file.',
      });
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
