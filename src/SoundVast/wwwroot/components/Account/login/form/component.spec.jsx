import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import LoginForm from './component';
import AntiForgeryToken from '../../../shared/form/antiForgeryToken/container';
import ValidationErrors from '../../../shared/form/validation/errors/component';

const setup = (newProps) => {
  const props = {
    handleSubmit: expect.createSpy(),
    ...newProps,
  };

  const wrapper = shallow(<LoginForm {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('LoginForm', () => {
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
