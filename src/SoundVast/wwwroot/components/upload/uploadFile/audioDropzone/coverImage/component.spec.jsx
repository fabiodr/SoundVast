import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import CoverImage from './component';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<CoverImage {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('CoverImage', () => {
  it('should render preview as image src', () => {
    const coverImageFile = {
      preview: 'test.jpg',
    };
    const { wrapper } = setup({ coverImageFile });
    const image = wrapper.find('img');

    expect(image.prop('src')).toBe(coverImageFile.preview);
  });

  it('should render title as image caption', () => {
    const coverImageFile = {
      title: 'test',
    };
    const { wrapper } = setup({ coverImageFile });
    const figcaption = wrapper.find('figcaption');

    expect(figcaption.text()).toBe(coverImageFile.title);
  });
});
