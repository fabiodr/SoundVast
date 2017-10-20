import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Content from './content';

const setup = (newProps) => {
  const props = {
    children: <div className="@@test" />,
    ...newProps,
  };

  const wrapper = shallow(<Content {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Content', () => {
  it('should render children', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.@@test').length).toBe(1);
  });
});
