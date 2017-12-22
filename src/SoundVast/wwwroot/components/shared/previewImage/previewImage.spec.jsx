import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import PreviewImage from './previewImage';

const setup = (newProps) => {
  const props = {
    previewUrl: 'blob:localhost:8080/test.jpg',
    ...newProps,
  };

  const wrapper = shallow(<PreviewImage {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('PreviewImage', () => {
  it('src should use previewUrl for src', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find('img').prop('src')).toBe(props.previewUrl);
  });
});
