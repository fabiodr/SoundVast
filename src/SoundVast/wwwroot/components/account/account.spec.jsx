import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Account from './account';
import Register from './register/registerContainer';
import Login from './login/loginContainer';
import ForgotPassword from './forgotPassword/forgotPasswordContainer';

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
  it('should render Register', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Register).length).toBe(1);
  });

  it('should render Login', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Login).length).toBe(1);
  });

  it('should render ForgotPassword', () => {
    const { wrapper } = setup();

    expect(wrapper.find(ForgotPassword).length).toBe(1);
  });
});
