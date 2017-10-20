import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import SocialLoginConfirmationForm from './socialLoginConfirmationForm';
import AntiForgeryToken from '../../../shared/form/antiForgeryToken/container';
import ValidationErrors from '../../../shared/form/validation/errors/component';

const setup = (newProps) => {
  const props = {
    handleSubmit: expect.createSpy(),
    loginProvider: 'Facebook',
    returnUrl: '/',
    ...newProps,
  };

  const wrapper = shallow(<SocialLoginConfirmationForm {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('SocialLoginConfirmationForm', () => {
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
