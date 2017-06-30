import expect from 'expect';

import { mapStateToProps } from './formContainer';

const state = {
  genre: {
    genres: [
      { name: 'metal' },
      { name: 'rock' },
    ],
  },
};

describe('UploadFileFormContainer', () => {
  it('should map state to props correctly', () => {
    const props = {
      name: 'bubble.mp3',
    };
    const stateProps = mapStateToProps(state, props);

    expect(stateProps).toEqual({
      initialValues: {
        name: 'bubble',
        genres: state.genre.genres,
      },
    });
  });
});
