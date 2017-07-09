import expect from 'expect';

import { mapStateToProps } from './audioDropzoneContainer';

describe('AudioDropzoneContainer', () => {
  it('should map state to props correctly', () => {
    const state = {
      upload: {
        audioFiles: [
          {
            id: 0,
            title: 'test.mp3',
            previewCoverImageUrl: 'localhost://test.jpg',
            size: 1003990,
            progressPercent: 33,
          },
        ],
      },
    };

    const stateProps = mapStateToProps(state);

    expect(stateProps).toEqual({
      files: [
        {
          id: state.upload.audioFiles[0].id,
          title: state.upload.audioFiles[0].title,
          preview: state.upload.audioFiles[0].previewCoverImageUrl,
          progressPercent: state.upload.audioFiles[0].progressPercent,
        },
      ],
    });
  });
});
