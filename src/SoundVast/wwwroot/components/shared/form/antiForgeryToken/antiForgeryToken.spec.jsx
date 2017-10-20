import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import AntiForgeryToken from './antiForgeryToken';

const setup = (newProps) => {
  const props = {
    form: 'test-form',
    ...newProps,
  };

  const wrapper = shallow(<AntiForgeryToken {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('AntiForgeryToken', () => {
  it('should render an anti forgery token input', () => {
    const { wrapper } = setup();

    expect(wrapper.prop('name')).toBe('__RequestVerificationToken');
    expect(wrapper.prop('type')).toBe('hidden');
    expect(wrapper.prop('component')).toBe('input');
  });
});
