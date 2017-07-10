import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Progress from './progress';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<Progress {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Progress', () => {
  let wrapper;

  it('should have a value for progress', () => {
    ({ wrapper } = setup());

    expect(wrapper.find('progress').prop('value')).toBe(0);
  });

  it('should not render message if not specified', () => {
    ({ wrapper } = setup());

    expect(wrapper.find('.message').length).toBe(0);
  });

  it('should render message if not empty', () => {
    const message = 'Uploading...';
    ({ wrapper } = setup({ message }));

    expect(wrapper.find('.message').text()).toBe(message);
  });
});
