import expect from 'expect';

import { mapStateToProps } from './formContainer';

describe('UploadFileFormContainer', () => {
  it('should map state to props correctly', () => {
    const props = {
      name: 'bubble.mp3',
    };

    const stateProps = mapStateToProps(undefined, props);

    expect(stateProps).toEqual({
      initialValues: {
        name: 'bubble',
      },
    });
  });
});
