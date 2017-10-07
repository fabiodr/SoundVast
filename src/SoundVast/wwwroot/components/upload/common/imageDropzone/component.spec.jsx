import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Dropzone from 'react-dropzone';

import ImageDropzone from './component';

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
  describe('preview image', () => {
    it('src should use preview when specified', () => {
      const preview = 'blob:localhost:8080/test.jpg';
      const { wrapper, props } = setup({ preview });

      expect(wrapper.find('img').prop('src')).toBe(props.preview);
    });

    it('src should use placeholder when not specified', () => {
      const { wrapper } = setup();

      expect(wrapper.find('img').prop('src')).toExist();
    });
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
