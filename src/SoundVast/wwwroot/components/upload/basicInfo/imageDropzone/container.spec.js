import expect from 'expect';

import { mapStateToProps } from './container';

describe('ImageDropzoneContainer', () => {
  it('should map state to props correctly', () => {
    const state = {
      upload: {
        audioFiles: [
          { previewCoverImageUrl: 'blob:localhost:8080/test.jpg' },
        ],
      },
    };
    const index = 0;
    const stateProps = mapStateToProps(state, { index });

    expect(stateProps).toEqual({
      preview: state.upload.audioFiles[index].previewCoverImageUrl,
    });
  });
});
