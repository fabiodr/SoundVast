import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import SpinnerButton from './button';

const setup = (newProps) => {
  const props = {
    children: 'Save',
    ...newProps,
  };

  const wrapper = shallow(<SpinnerButton {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('SpinnerButton', () => {
  let wrapper;
  let props;

  it('should render custom text when it is not loading', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.text()).toBe(props.children);
  });
});
