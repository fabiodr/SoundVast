import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import ImageDropzone from './component';

const setup = (newProps) => {
  const props = {
    onDrop: expect.createSpy(),
    index: 0,
    preview: 'blob:localhost:8080/test.jpg',
    ...newProps,
  };

  const wrapper = shallow(<ImageDropzone {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('ImageDropzone', () => {
  let wrapper;
  let props;

  it('preview image should use preview', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.find('img').prop('src')).toBe(props.preview);
  });
});
