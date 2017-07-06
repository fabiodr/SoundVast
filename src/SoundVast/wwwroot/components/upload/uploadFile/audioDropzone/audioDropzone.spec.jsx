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
      },
      {
        id: 'testId',
        title: 'testTwo',
        preview: 'blob:localhost:8080/test.jpg',
      },
    ],
    progressPercents: [
      {
        id: 'testId',
        value: 22,
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
      { id: 'testId', title: 'test', preview: '' },
      { id: 'testId', title: 'testTwo', preview: 'blob:localhost:8080/test.jpg' },
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

  it('should render a progress bar for each file', () => {
    ({ props, wrapper } = setup());

    expect(wrapper.find(Progress).length).toBe(props.progressPercents.length);
  });
});
