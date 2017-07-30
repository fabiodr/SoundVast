import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import ForgotPassword from './component';
import Modal from '../../shared/modal/container';
import ForgotPasswordForm from './form/container';

const setup = (newProps) => {
  const props = {
    submit: expect.createSpy(),
    ...newProps,
  };

  const wrapper = shallow(<ForgotPassword {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('ForgotPassword', () => {
  let wrapper;

  it('should render a forgotPassword form in a Modal', () => {
    ({ wrapper } = setup());

    const modal = wrapper.find(Modal);

    expect(modal.find(ForgotPasswordForm).length).toBe(1);
  });
});
