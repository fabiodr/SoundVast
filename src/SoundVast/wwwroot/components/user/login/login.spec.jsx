import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Login from './login';
import SocialLoginsContainer from '../login/socialLogins/socialLoginsContainer';
import LoginSuccessMessage from './successMessage/successMessage';
import Modal from '../../shared/modal/modalContainer';
import LoginForm from './form/formContainer';

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

  it('should render social logins in a Modal', () => {
    ({ wrapper } = setup());

    const modal = wrapper.find(Modal);

    expect(modal.find(SocialLoginsContainer).length).toBe(1);
  });


  it('should render success message', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(LoginSuccessMessage).length).toBe(1);
  });

  it('should render a login form in a Modal', () => {
    ({ wrapper } = setup());

    const modal = wrapper.find(Modal);

    expect(modal.find(LoginForm).length).toBe(1);
  });
});
