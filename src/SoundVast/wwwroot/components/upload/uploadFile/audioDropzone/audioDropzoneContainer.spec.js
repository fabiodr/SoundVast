import expect from 'expect';

import { mapStateToProps } from './audioDropzoneContainer';

describe('AudioDropzoneContainer', () => {
  it('should map state to props correctly', () => {
    const state = {
      upload: {
        audioFiles: [
          {
            key: 0,
            title: 'test.mp3',
            previewCoverImageUrl: 'localhost://test.jpg',
            size: 1003990,
          },
        ],
      },
    };

    const stateProps = mapStateToProps(state);

    expect(stateProps).toEqual({
      files: [
        {
          key: state.upload.audioFiles[0].key,
          title: state.upload.audioFiles[0].title,
          preview: state.upload.audioFiles[0].previewCoverImageUrl,
        },
      ],
    });
  });
});
