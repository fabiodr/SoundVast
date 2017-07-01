import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import AudioDropzone from './audioDropzone';
import Form from './form/formContainer';

const setup = (newProps) => {
  const props = {
    files: [],
    removeFile: expect.createSpy(),
    onDrop: expect.createSpy(),
    ...newProps,
  };

  const wrapper = shallow(<AudioDropzone {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('AudioDropzone', () => {
  let wrapper;

  it('should map no forms when no files', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(Form).length).toBe(0);
  });

  it('should map form for each file', () => {
    const files = [
      {
        key: 0,
        name: 'test.mp3',
        preview: 'blob:localhost:8080/test.jpg',
      },
      {
        key: 1,
        name: 'testTwo.mp3',
        preview: 'blob:localhost:8080/test.jpg',
      },
    ];

    ({ wrapper } = setup({ files }));

    expect(wrapper.find(Form).length).toBe(files.length);
  });
});
