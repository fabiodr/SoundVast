import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Login from './login';
import SocialLoginsContainer from '../login/socialLogins/container';
import Modal from '../../shared/modal/container';
import LoginForm from './form/container';

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

  it('should render a Modal', () => {
    ({ wrapper } = setup());

    expect(wrapper.type()).toBe(Modal);
  });

  it('should render social logins', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(SocialLoginsContainer).length).toBe(1);
  });

  it('should render a login form', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(LoginForm).length).toBe(1);
  });
});
