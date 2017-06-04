import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Validate from './validate';

const setup = (newProps) => {
  const props = {
    touched: false,
    error: 'Required',
    ...newProps,
  };

  const wrapper = shallow(<Validate {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Validate', () => {
  let wrapper;

  it('should not render an error when field has not been touched', () => {
    ({ wrapper } = setup());

    expect(wrapper.text()).toBe('');
  });

  it('should render an error when field has been touched', () => {
    ({ wrapper } = setup({ touched: true }));

    expect(wrapper.text()).toBe('Required');
  });
});
