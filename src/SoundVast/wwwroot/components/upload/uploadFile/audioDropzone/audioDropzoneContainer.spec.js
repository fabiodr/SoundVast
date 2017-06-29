import expect from 'expect';

import { onDrop } from './audioDropzoneContainer';

describe('AudioDropzoneContainer', () => {
  it('should add files to existing files', () => {
    let stateFiles;
    const files = [{
      title: 'bubble.mp3',
    }];

    const addFiles = (func) => {
      stateFiles = func([{
        title: 'test.mp3',
      }]);
    };

    onDrop({ addFiles })(files);

    expect(stateFiles).toEqual([
      { key: 0, title: 'test.mp3' },
      { key: 1, title: 'bubble.mp3' },
    ]);
  });
});
