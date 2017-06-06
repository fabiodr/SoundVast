import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import User from './user';
import Register from './register/register';
import Login from './login/login';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<User {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('User', () => {
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
