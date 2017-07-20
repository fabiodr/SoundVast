import expect from 'expect';

import { mapStateToProps } from './container';

const state = {
  genre: {
    genres: [
      { name: 'metal' },
      { name: 'rock' },
    ],
  },
  upload: {
    audioFiles: [
      {
        title: 'test',
        artist: 'testAlbum',
        coverImagePreview: 'blob:localhost:8080/test.jpg',
      },
    ],
  },
};

describe('UploadFileFormContainer', () => {
  it('should map state to props correctly', () => {
    const index = 0;
    const stateProps = mapStateToProps(state, { index });

    expect(stateProps).toEqual({
      initialValues: {
        name: state.upload.audioFiles[index].title,
        artist: state.upload.audioFiles[index].artist,
      },
    });
  });
});
