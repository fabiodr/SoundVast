import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import AudioDropzone from './audioDropzone';
import Form from './form/formContainer';

const setup = (newProps) => {
  const props = {
    files: [
      {
        key: 0,
        title: 'test',
        preview: 'blob:localhost:8080/test.jpg',
      },
      {
        key: 1,
        title: 'testTwo',
        preview: 'blob:localhost:8080/test.jpg',
      },
    ],
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
  let props;

  it('should map no forms when no files', () => {
    ({ wrapper } = setup({ files: [] }));

    expect(wrapper.find(Form).length).toBe(0);
  });

  it('should map no preview images when no files', () => {
    ({ wrapper } = setup({ files: [] }));

    expect(wrapper.find('img').length).toBe(0);
  });

  it('should not map preview image when preview is empty', () => {
    const files = [
      { key: 0, title: 'test', preview: '' },
      { key: 1, title: 'testTwo', preview: 'blob:localhost:8080/test.jpg' },
    ];
    ({ wrapper } = setup({ files }));

    expect(wrapper.find('img').length).toBe(1);
  });

  it('should map preview image for each file', () => {
    ({ props, wrapper } = setup());

    expect(wrapper.find('img').length).toBe(props.files.length);
  });

  it('should map form for each file', () => {
    ({ props, wrapper } = setup());

    expect(wrapper.find(Form).length).toBe(props.files.length);
  });
});
