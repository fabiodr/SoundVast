import expect from 'expect';

import { mapStateToProps } from './progressContainer';

describe('ProgressContainer', () => {
  it('should map state to props correctly', () => {
    const index = 0;
    const state = {
      upload: {
        audioFiles: [{ progressPercent: 30 }],
      },
    };

    const stateProps = mapStateToProps(state, { index });

    expect(stateProps).toEqual({
      progressPercent: state.upload.audioFiles[index].progressPercent,
    });
  });
});
