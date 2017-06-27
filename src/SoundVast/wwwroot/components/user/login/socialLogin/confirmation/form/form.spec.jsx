import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import SocialLoginConfirmationForm from './form';
import AntiForgeryToken from '../../../../../shared/form/antiForgeryToken/antiForgeryTokenContainer';
import ValidationErrors from '../../../../../shared/form/validation/errors/errors';

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
  let wrapper;
  let props;

  it('should render an anti-forgery token', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(AntiForgeryToken).length).toBe(1);
  });

  it('should call submit handler when form is submitted', () => {
    ({ wrapper, props } = setup());

    wrapper.simulate('submit');

    expect(props.handleSubmit).toHaveBeenCalled();
  });

  it('should render validation errors', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(ValidationErrors).length).toBe(1);
  });
});
