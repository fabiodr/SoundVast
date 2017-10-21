import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import AntiForgeryToken from '../../shared/form/antiForgeryToken/antiForgeryTokenContainer';
import ValidationErrors from '../../shared/form/validation/errors/component';
import ForgotPassword from './forgotPassword';
import Modal from '../../shared/modal/modalContainer';
import ForgotPasswordForm from './forgotPasswordContainer';

const setup = (newProps) => {
  const props = {
    handleSubmit: expect.createSpy(),
    ...newProps,
  };

  const wrapper = shallow(<ForgotPassword {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('ForgotPassword', () => {
  it('should render a forgotPassword form in a Modal', () => {
    const { wrapper } = setup();

    const modal = wrapper.find(Modal);

    expect(modal.find(ForgotPasswordForm).length).toBe(1);
  });

  it('should render an anti-forgery token', () => {
    const { wrapper } = setup();

    expect(wrapper.find(AntiForgeryToken).length).toBe(1);
  });

  it('should call submit handler when form is submitted', () => {
    const { wrapper, props } = setup();
    const form = wrapper.find('form');

    form.simulate('submit');

    expect(props.handleSubmit).toHaveBeenCalled();
  });

  it('should render validation errors', () => {
    const { wrapper } = setup();

    expect(wrapper.find(ValidationErrors).length).toBe(1);
  });
});
