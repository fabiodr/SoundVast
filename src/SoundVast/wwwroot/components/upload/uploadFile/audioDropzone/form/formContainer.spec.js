import expect from 'expect';

import { mapStateToProps } from './formContainer';

const state = {
  genre: {
    genres: [
      { name: 'metal' },
      { name: 'rock' },
    ],
  },
  upload: {
    audioFiles: [
      { title: 'test', artist: 'testAlbum' },
    ],
  },
};

describe('UploadFileFormContainer', () => {
  it('should map state to props correctly', () => {
    const props = {
      index: 0,
    };
    const stateProps = mapStateToProps(state, props);

    expect(stateProps).toEqual({
      initialValues: {
        name: 'test',
        artist: 'testAlbum',
        genres: state.genre.genres,
      },
    });
  });
});
