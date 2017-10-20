import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Dropzone from 'react-dropzone';

import ImageDropzone from './imageDropzone';
import PreviewImage from '../previewImage/container';

const setup = (newProps) => {
  const props = {
    onDrop: expect.createSpy(),
    id: 'test',
    ...newProps,
  };

  const wrapper = shallow(<ImageDropzone {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('ImageDropzone', () => {
  it('should render PreviewImage', () => {
    const { wrapper } = setup();

    expect(wrapper.find(PreviewImage).length).toBe(1);
  });

  it('onDrop should pass in first file and id only', () => {
    const { wrapper, props } = setup();
    const dropzone = wrapper.find(Dropzone);
    const files = [
      new File('test.jpg'),
      new File('test2.jpg'),
    ];

    dropzone.simulate('drop', files);

    expect(props.onDrop).toHaveBeenCalledWith(files[0], props.id);
  });
});
