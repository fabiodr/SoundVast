import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Register from './register';
import Modal from '../../shared/modal/container';
import SocialLoginsContainer from '../login/socialLogins/socialLoginsContainer';
import RegisterForm from './form/container';
import AntiForgeryToken from '../../shared/form/antiForgeryToken/container';
import ValidationErrors from '../../shared/form/validation/errors/component';

const setup = (newProps) => {
  const props = {
    handleSubmit: expect.createSpy(),
    ...newProps,
  };

  const wrapper = shallow(<Register {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Register', () => {
  it('should render social logins in a Modal', () => {
    const { wrapper } = setup();
    const modal = wrapper.find(Modal);

    expect(modal.find(SocialLoginsContainer).length).toBe(1);
  });

  it('should render a register form in a Modal', () => {
    const { wrapper } = setup();
    const modal = wrapper.find(Modal);

    expect(modal.find(RegisterForm).length).toBe(1);
  });

  it('should render an anti-forgery token', () => {
    const { wrapper } = setup();

    expect(wrapper.find(AntiForgeryToken).length).toBe(1);
  });

  it('should render validation errors', () => {
    const { wrapper } = setup();

    expect(wrapper.find(ValidationErrors).length).toBe(1);
  });

  it('should call submit handler when form is submitted', () => {
    const { wrapper, props } = setup();
    const form = wrapper.find('form');

    form.simulate('submit');

    expect(props.handleSubmit).toHaveBeenCalled();
  });
});
