import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Login from './login';
import LoginSuccessMessage from './successMessage/successMessage';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<Login {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Login', () => {
  let wrapper;

  it('should render success message', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(LoginSuccessMessage).length).toBe(1);
  });
});
