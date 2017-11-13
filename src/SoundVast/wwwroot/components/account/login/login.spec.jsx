import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Login from './login';
import SocialLoginsContainer from '../login/socialLogins/socialLoginsContainer';
import Modal from '../../shared/modal/modalContainer';
import AntiForgeryToken from '../../shared/form/antiForgeryToken/antiForgeryTokenContainer';
import ValidationErrors from '../../shared/form/validation/errors/component';

const setup = (newProps) => {
  const props = {
    handleSubmit: expect.createSpy(),
    ...newProps,
  };

  const wrapper = shallow(<Login {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Login', () => {
  it('should render a Modal', () => {
    const { wrapper } = setup();

    expect(wrapper.type()).toBe(Modal);
  });

  it('should render social logins', () => {
    const { wrapper } = setup();

    expect(wrapper.find(SocialLoginsContainer).length).toBe(1);
  });

  it('should render a login form', () => {
    const { wrapper } = setup();
    const form = wrapper.find('form');

    expect(form.length).toBe(1);
  });

  it('should render an anti-forgery token', () => {
    const { wrapper } = setup();

    expect(wrapper.find(AntiForgeryToken).length).toBe(1);
  });

  it('should call submit handler when form is submitted', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('submit');

    expect(props.handleSubmit).toHaveBeenCalled();
  });

  it('should render validation errors', () => {
    const { wrapper } = setup();

    expect(wrapper.find(ValidationErrors).length).toBe(1);
  });
});
