import expect from 'expect';

import { mapStateToProps } from './audioDropzoneContainer';

describe('AudioDropzoneContainer', () => {
  it('should map state to props correctly', () => {
    const state = {
      upload: {
        audioFiles: [
          {
            key: 0,
            name: 'test.mp3',
            preview: 'blob:localhost:8080/test.jpg',
            size: 1003990,
          },
        ],
      },
    };

    const stateProps = mapStateToProps(state);

    expect(stateProps).toEqual({
      files: [
        {
          preview: state.upload.audioFiles[0].preview,
          key: state.upload.audioFiles[0].key,
          name: state.upload.audioFiles[0].name,
        },
      ],
    });
  });
});
