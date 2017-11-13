import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Email, Image } from 'react-html-email';

import SharedEmail from './email';

const setup = (newProps) => {
  const props = {
    children: <div className="@@test" />,
    title: 'Test Email',
    ...newProps,
  };

  const wrapper = shallow(<SharedEmail {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Email', () => {
  it('should render an Email', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Email).length).toBe(1);
  });

  it('should render an Image', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Image).length).toBe(1);
  });

  it('should render children', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.@@test').length).toBe(1);
  });
});
