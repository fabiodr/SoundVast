import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import AudioDropzone from './audioDropzone';
import Form from './uploadFileFormContainer';
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
        id: 'testTwoId',
        title: 'testTwo',
        preview: 'blob:localhost:8080/testTwo.jpg',
        progressPercent: 25,
      },
    ],
    removeAudioFile: expect.createSpy(),
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
  it('should render no forms when no files', () => {
    const { wrapper } = setup({ files: [] });

    expect(wrapper.find(Form).length).toBe(0);
  });

  it('should render no preview images when no files', () => {
    const { wrapper } = setup({ files: [] });

    expect(wrapper.find('img').length).toBe(0);
  });

  it('should render same number of preview images as files', () => {
    const { wrapper } = setup();

    expect(wrapper.find('img').length).toBe(2);
  });

  it('should render same number of captions as files', () => {
    const { wrapper } = setup();

    expect(wrapper.find('figcaption').length).toBe(2);
  });

  it('preview image should use preview', () => {
    const { props, wrapper } = setup();

    expect(wrapper.find('img').at(0).prop('src')).toBe(props.files[0].preview);
  });

  it('should render preview image for each file', () => {
    const { props, wrapper } = setup();

    expect(wrapper.find('img').length).toBe(props.files.length);
  });

  it('should render form for each file', () => {
    const { props, wrapper } = setup();

    expect(wrapper.find(Form).length).toBe(props.files.length);
  });

  it('should render a progress bar for each file', () => {
    const { props, wrapper } = setup();

    expect(wrapper.find(Progress).length).toBe(props.files.length);
  });

  describe('PreviewImage caption', () => {
    it('should render title in caption', () => {
      const { wrapper, props } = setup();
      const figcaption = wrapper.find('figcaption');

      expect(figcaption.text()).toBe(props.title);
    });
  });
});
