import expect from 'expect';

import { mapStateToProps } from './audioDropzoneContainer';

describe('AudioDropzoneContainer', () => {
  it('should map state to props correctly', () => {
    const state = {
      upload: {
        files: [
          { title: 'test.mp3' },
        ],
      },
    };

    const stateProps = mapStateToProps(state);

    expect(stateProps).toEqual({
      files: state.upload.files,
    });
  });
});
