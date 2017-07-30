import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Account from './component';
import Register from './register/component';
import Login from './login/component';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<Account {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Account', () => {
  let wrapper;

  it('should render Register', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(Register).length).toBe(1);
  });

  it('should render Login', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(Login).length).toBe(1);
  });
});
