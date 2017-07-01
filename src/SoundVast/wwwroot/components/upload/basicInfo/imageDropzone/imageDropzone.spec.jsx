import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import ImageDropzone from './imageDropzone';

const setup = (newProps) => {
  const props = {
    onDrop: expect.createSpy(),
    index: 0,
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

  it('should not render image when no preview', () => {
    ({ wrapper } = setup({}));

    expect(wrapper.find('img').length).toBe(0);
  });

  it('should render image when there is a preview', () => {
    const preview = 'blob:localhost:8080/test.jpg';
    ({ wrapper } = setup({ preview }));

    expect(wrapper.find('img').length).toBe(1);
  });
});
