import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import AudioDropzone from './audioDropzone';
import Form from './form/formContainer';
import Progress from './progress/progress';

const setup = (newProps) => {
  const props = {
    files: [
      {
        id: 'testId',
        title: 'test',
        preview: 'blob:localhost:8080/test.jpg',
        progressPercent: 33,
      },
      {
        id: 'testId',
        title: 'testTwo',
        preview: 'blob:localhost:8080/test.jpg',
        progressPercent: 25,
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

  it('should map same number of preview images as files', () => {
    ({ wrapper } = setup());

    expect(wrapper.find('img').length).toBe(2);
  });

  it('should map same number of captions as files', () => {
    ({ wrapper } = setup());

    expect(wrapper.find('figcaption').length).toBe(2);
  });

  it('preview image should fallback to placeholder when preview is empty', () => {
    const files = [
      { id: 'testId', title: 'testTwo', preview: '' },
    ];
    ({ wrapper } = setup({ files }));

    expect(wrapper.find('img').first().prop('src')).toBeTruthy();
  });

  it('preview image should use preview when not empty', () => {
    ({ props, wrapper } = setup());

    expect(wrapper.find('img').at(0).prop('src')).toBe(props.files[0].preview);
  });

  it('should map preview image for each file', () => {
    ({ props, wrapper } = setup());

    expect(wrapper.find('img').length).toBe(props.files.length);
  });

  it('should map form for each file', () => {
    ({ props, wrapper } = setup());

    expect(wrapper.find(Form).length).toBe(props.files.length);
  });

  it('should render a progress bar for each file', () => {
    ({ props, wrapper } = setup());

    expect(wrapper.find(Progress).length).toBe(props.files.length);
  });
});
