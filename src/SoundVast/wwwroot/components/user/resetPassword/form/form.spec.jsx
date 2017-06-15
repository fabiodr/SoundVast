import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import ResetPasswordForm from './form';
import AntiForgeryToken from '../../../shared/form/antiForgeryToken/antiForgeryTokenContainer';
import ValidationErrors from '../../../shared/form/validation/errors/errors';

const setup = (newProps) => {
  const props = {
    handleSubmit: expect.createSpy(),
    ...newProps,
  };

  const wrapper = shallow(<ResetPasswordForm {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('ResetPasswordForm', () => {
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
