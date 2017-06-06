import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import ValidationError from './error';

const setup = (newProps) => {
  const props = {
    touched: false,
    error: 'Required',
    ...newProps,
  };

  const wrapper = shallow(<ValidationError {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('ValidationError', () => {
  let wrapper;

  it('should not render an error when field has not been touched', () => {
    ({ wrapper } = setup());

    expect(wrapper.text()).toNotBe('Required');
  });

  it('should render an error when field has been touched', () => {
    ({ wrapper } = setup({ touched: true }));

    expect(wrapper.text()).toBe('Required');
  });
});
