import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Register from './component';
import Modal from '../../shared/modal/container';
import SocialLoginsContainer from '../login/socialLogins/container';
import RegisterForm from './form/container';

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

  it('should render social logins in a Modal', () => {
    ({ wrapper } = setup());

    const modal = wrapper.find(Modal);

    expect(modal.find(SocialLoginsContainer).length).toBe(1);
  });

  it('should render a register form in a Modal', () => {
    ({ wrapper } = setup());

    const modal = wrapper.find(Modal);

    expect(modal.find(RegisterForm).length).toBe(1);
  });
});
