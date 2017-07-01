import expect from 'expect';

import { mapStateToProps } from './basicInfoContainer';

describe('BasicInfoContainer', () => {
  it('should map state to props correctly', () => {
    const state = {
      genre: {
        genres: [
          { id: 0, name: 'metal' },
          { id: 1, name: 'rock' },
        ],
      },
      upload: {
        coverImageFile: {
          name: 'bubble.jpg',
        },
      },
    };

    const stateProps = mapStateToProps(state);

    expect(stateProps).toEqual({
      genres: state.genre.genres,
      initialValues: {
        coverImageFile: state.upload.coverImageFile,
      },
    });
  });
});
