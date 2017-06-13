import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import ForgotPasswordForm from './form';
import AntiForgeryToken from '../../../shared/form/antiForgeryToken/antiForgeryTokenContainer';

const setup = (newProps) => {
  const props = {
    handleSubmit: expect.createSpy(),
    ...newProps,
  };

  const wrapper = shallow(<ForgotPasswordForm {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('ForgotPasswordForm', () => {
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
});
