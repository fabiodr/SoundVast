import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Register from './register';
import Modal from '../../shared/modal/modalContainer';
import SocialLoginsContainer from '../login/socialLogins/socialLoginsContainer';
import RegisterForm from './form/formContainer';

const setup = (newProps) => {
  const props = {
    submit: expect.createSpy(),
    ...newProps,
  };

  const wrapper = shallow(<Register {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Register', () => {
  let wrapper;

  it('should wrap component in a modal', () => {
    ({ wrapper } = setup());

    expect(wrapper.type()).toBe(Modal);
  });

  it('should render social logins', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(SocialLoginsContainer).length).toBe(1);
  });

  it('should render a register form', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(RegisterForm).length).toBe(1);
  });
});
