import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import AntiForgeryToken from './antiForgeryToken';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<AntiForgeryToken {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('AntiForgeryToken', () => {
  let wrapper;

  it('should render an anti forgery token input', () => {
    ({ wrapper } = setup());

    expect(wrapper.prop('name')).toBe('__RequestVerificationToken');
    expect(wrapper.prop('type')).toBe('hidden');
    expect(wrapper.prop('component')).toBe('input');
  });
});
